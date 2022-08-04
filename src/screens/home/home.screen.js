/* eslint-disable curly */

import React, {useContext, useMemo} from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  View,
  SectionList,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchBar from '../../components/search-bar';
import SearchItem from '../../components/search-item';
import {SearchResultContext} from '../../contexts/search.context';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {results} = useContext(SearchResultContext);

  const backgroundStyle = useMemo(() => {
    return {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  }, [isDarkMode]);

  const sectionListData = useMemo(() => {
    if (!results.length) {
      /// return empty if no results
      return [];
    }

    const collectionNames = [];
    results.forEach(c => {
      // avoid duplicate items
      if (collectionNames.includes(c.collectionName)) return;

      // only inlcude songs
      if (c.kind !== 'song') return;

      return collectionNames.push(c.collectionName);
    });

    return collectionNames.map(title => ({
      title,
      data: results.filter(item => item.collectionName === title),
    }));
  }, [results]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.root}>
        <SearchBar />
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={sectionListData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <SearchItem item={item} />}
          renderSectionHeader={({section: {title}}) => (
            <View style={backgroundStyle}>
              <Text style={styles.album}>{title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  album: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;

/* eslint-disable curly */

import React, {useContext, useEffect, useMemo} from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  View,
  SectionList,
  useColorScheme,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ModeSelect from '../../components/mode-select/mode-select.component';
import SearchBar from '../../components/search-bar';
import SearchItem from '../../components/search-item';
import {
  MODE_SELECTION_KEY,
  SEARCH_RESULT_PERSIST_KEY,
} from '../../config/search-result.config';
import {SearchResultContext} from '../../contexts/search.context';
import {ALBUM} from '../../contexts/config';
import moment from 'moment';
import {uniq} from 'lodash';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {mode, results, setResults, handleModeSelect} =
    useContext(SearchResultContext);

  const backgroundStyle = useMemo(() => {
    return {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  }, [isDarkMode]);

  useEffect(() => {
    const readPersistedMode = async () => {
      const persistedMode = await AsyncStorage.getItem(MODE_SELECTION_KEY);
      if (persistedMode) {
        handleModeSelect(persistedMode);
        return;
      }
    };

    readPersistedMode();
  }, [handleModeSelect]);

  useEffect(() => {
    const readPersistedResult = async () => {
      const data = await AsyncStorage.getItem(SEARCH_RESULT_PERSIST_KEY);
      const dataParse = JSON.parse(data);
      setResults(dataParse.results);
    };

    readPersistedResult();
  }, [setResults]);

  const sectionListData = useMemo(() => {
    if (!results.length) {
      /// return empty if no results
      return [];
    }

    const isAlbumMode = mode === ALBUM;

    let collectionNames = [];
    results.forEach(c => {
      // avoid duplicate items
      if (collectionNames.includes(c.collectionName)) return;

      // only inlcude songs
      if (c.kind !== 'song') return;

      return isAlbumMode
        ? collectionNames.push(c.collectionName)
        : collectionNames.push(c.releaseDate);
    });

    collectionNames = uniq(collectionNames);

    return collectionNames.map(title => ({
      title: isAlbumMode ? title : moment(title).format('MMM d, YYYY'),
      data: isAlbumMode
        ? results.filter(item => item.collectionName === title)
        : results.filter(item => item.releaseDate === title),
    }));
  }, [results, mode]);

  const viewModeNode = useMemo(() => {
    if (!sectionListData.length) return;

    return <ModeSelect />;
  }, [sectionListData]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.root}>
        <SearchBar />
        {viewModeNode}
        <SectionList
          stickySectionHeadersEnabled={false}
          sections={sectionListData}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <SearchItem item={item} navigation={navigation} />
          )}
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

export default HomeScreen;

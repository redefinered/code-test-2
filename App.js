/* eslint-disable react-native/no-inline-styles */

import React, {useContext, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchBar from './src/components/search-bar';
import SearchItem from './src/components/search-item';
import SearchResultProvider, {
  SearchResultContext,
} from './src/contexts/search.context';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {results} = useContext(SearchResultContext);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = ({item}) => {
    // eslint-disable-next-line curly
    if (!item.trackName) return;

    return <SearchItem item={item} />;
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.root}>
        <SearchBar />
        <FlatList
          data={results}
          keyExtractor={item => item.trackId}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const AppContainer = () => {
  return (
    <SearchResultProvider>
      <App />
    </SearchResultProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
  },
});

export default AppContainer;

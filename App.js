/* eslint-disable react-native/no-inline-styles */

import React, {useContext, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SearchResultProvider, {SearchResultContext} from './src/search.context';

const SearchBar = () => {
  const [searchString, setSearchString] = useState('');
  const handleChangeText = text => setSearchString(text);
  return (
    <TextInput
      style={styles.searchBar}
      value={searchString}
      handleChangeText={handleChangeText}
    />
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {results} = useContext(SearchResultContext);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem = ({item}) => {
    // eslint-disable-next-line curly
    if (!item.trackName) return;

    return (
      <View style={{marginBottom: 10}}>
        <Text style={{fontWeight: 'bold'}}>{item.trackName}</Text>
        <Text>{item.artistName}</Text>
      </View>
    );
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
  searchBar: {
    padding: 5,
    borderWidth: 1,
  },
});

export default AppContainer;

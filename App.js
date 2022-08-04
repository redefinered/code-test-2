import React, {useContext} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
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

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.root}>
        <SearchBar />
        <FlatList
          data={results}
          keyExtractor={item => item.trackId}
          renderItem={({item}) => <SearchItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
  },
});

const AppContainer = () => (
  <SearchResultProvider>
    <App />
  </SearchResultProvider>
);

export default AppContainer;

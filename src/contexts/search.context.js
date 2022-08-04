import React, {createContext, useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {debounce} from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  MODE_SELECTION_KEY,
  SEARCH_RESULT_PERSIST_KEY,
} from '../config/search-result.config';
import {ALBUM} from './config';

export const SearchResultContext = createContext({
  mode: ALBUM,
  setMode: () => {},
  term: [],
  setTerm: () => {},
  results: [],
  setResults: () => {},
  isFetching: false,
  setIsFetching: () => {},
});

const SearchResultProvider = ({children}) => {
  const [term, setTerm] = useState('');
  const [mode, setMode] = useState(ALBUM);
  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getResults = debounce(async () => {
      setIsFetching(true);
      const resp = await axios.get(
        `https://itunes.apple.com/search?term=${term}`,
      );
      const searchResult = resp?.data.results;

      // prevents persisted data from being reset when exiting app
      // eslint-disable-next-line curly
      if (!resp?.data.results.length) return;

      // persist search result
      await AsyncStorage.setItem(
        SEARCH_RESULT_PERSIST_KEY,
        JSON.stringify(resp?.data),
      );

      setResults(searchResult);
      setIsFetching(false);
    }, 500);
    getResults();
  }, [term]);

  const handleModeSelect = useCallback(async modevalue => {
    // eslint-disable-next-line curly
    if (!modevalue) return;

    await AsyncStorage.setItem(MODE_SELECTION_KEY, modevalue);
    setMode(modevalue);
  }, []);

  return (
    <SearchResultContext.Provider
      value={{
        mode,
        handleModeSelect,
        term,
        setTerm,
        results,
        setResults,
        isFetching,
        setIsFetching,
      }}>
      {children}
    </SearchResultContext.Provider>
  );
};

export default SearchResultProvider;

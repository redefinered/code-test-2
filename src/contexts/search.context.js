import axios from 'axios';
import {debounce} from 'lodash';
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SEARCH_RESULT_PERSIST_KEY} from '../config/search-result.config';

export const SearchResultContext = createContext({
  term: [],
  setTerm: () => {},
  results: [],
  setResults: () => {},
  isFetching: false,
  setIsFetching: () => {},
});

const SearchResultProvider = ({children}) => {
  const [term, setTerm] = useState('');
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

  return (
    <SearchResultContext.Provider
      value={{
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

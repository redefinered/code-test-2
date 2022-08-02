import axios from 'axios';
import {debounce} from 'lodash';
import React, {createContext, useEffect, useState} from 'react';

export const SearchResultContext = createContext({
  term: [],
  setTerm: () => {},
  results: [],
  setResults: () => {},
  isFetching: false,
  setIsFetching: () => {},
});

const SearchResultProvider = ({children}) => {
  const [term, setTerm] = useState('metallica');
  const [results, setResults] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getResults = debounce(async () => {
      setIsFetching(true);
      const resp = await axios.get(
        `https://itunes.apple.com/search?term=${term}`,
      );
      setResults(resp?.data.results);
      setIsFetching(false);
    }, 500);
    getResults();
  }, [term]);

  return (
    <SearchResultContext.Provider
      value={{term, setTerm, results, setResults, isFetching, setIsFetching}}>
      {children}
    </SearchResultContext.Provider>
  );
};

export default SearchResultProvider;

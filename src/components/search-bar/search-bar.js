import React, {useContext} from 'react';
import {TextInput} from 'react-native';
import {SearchResultContext} from '../../contexts/search.context';
import styles from './styles';

const SearchBar = () => {
  const {term, setTerm} = useContext(SearchResultContext);
  const handleChangeText = text => setTerm(text);

  return (
    <TextInput
      style={styles.searchBar}
      value={term}
      onChangeText={handleChangeText}
    />
  );
};

export default SearchBar;

import React, {useState} from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

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

export default SearchBar;

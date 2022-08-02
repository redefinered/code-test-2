/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const SearchItem = ({item}) => (
  <View style={{marginBottom: 10}}>
    <Text style={{fontWeight: 'bold'}}>{item.trackName}</Text>
    <Text>{item.artistName}</Text>
  </View>
);

export default SearchItem;

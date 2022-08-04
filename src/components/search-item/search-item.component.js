/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TrackDetailContext} from '../../contexts/track-detail.context';

const SearchItem = ({item}) => {
  const navigation = useNavigation();
  const {setSelectedTrack} = useContext(TrackDetailContext);
  if (!item?.trackName) {
    return <View />;
  }

  const handleTrackPress = () => {
    setSelectedTrack(item);
    navigation.navigate('Track Detail');
  };

  return (
    <TouchableOpacity onPress={handleTrackPress} style={{padding: 10}}>
      <Text>{item.trackName}</Text>
    </TouchableOpacity>
  );
};

export default SearchItem;

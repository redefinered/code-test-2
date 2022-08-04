/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TrackDetailContext} from '../../contexts/track-detail.context';

/**
 * The useNavigation hook can be used here but jest does not work well with it
 * so, navigation object is passed thru props instead
 */
const SearchItem = ({item, navigation}) => {
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

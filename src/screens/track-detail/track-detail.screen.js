import React, {useContext, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {TrackDetailContext} from '../../contexts/track-detail.context';
import moment from 'moment';
import styles from './styles';

const TrackDetailScreen = () => {
  const {selectedTrack} = useContext(TrackDetailContext);
  useEffect(() => {
    console.log({selectedTrack});
  }, [selectedTrack]);
  return (
    <View style={styles.root}>
      <Image
        source={{uri: selectedTrack?.artworkUrl100, width: 100, height: 100}}
        style={styles.image}
      />
      <Text style={styles.track}>{selectedTrack?.trackName}</Text>
      <Text>{`Album: ${selectedTrack?.collectionName}`}</Text>
      <Text>{`Release date: ${moment(selectedTrack?.releaseDate).format(
        'MMM d, YYYY',
      )}`}</Text>
    </View>
  );
};

export default TrackDetailScreen;

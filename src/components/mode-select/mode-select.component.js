import React, {useCallback, useContext, useMemo} from 'react';
import {View, Switch, Text} from 'react-native';
import {ALBUM, RELEASE_DATE} from '../../contexts/config';
import {SearchResultContext} from '../../contexts/search.context';
import styles from './styles';

const ModeSelect = () => {
  const {mode, handleModeSelect} = useContext(SearchResultContext);

  const handleToggle = option => {
    if (option) {
      handleModeSelect(RELEASE_DATE);
    } else {
      handleModeSelect(ALBUM);
    }
  };

  const value = useMemo(() => {
    return mode === RELEASE_DATE;
  }, [mode]);

  return (
    <View style={styles.root}>
      <View style={styles.switchContainer}>
        <Switch
          // trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggle}
          value={value}
        />
        <Text style={styles.label}>View by release date</Text>
      </View>
    </View>
  );
};

export default ModeSelect;

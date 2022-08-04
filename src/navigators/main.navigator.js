import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/home.screen';
import TrackDetailScreen from '../screens/track-detail';

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={HomeScreen} />
    <Stack.Screen name="Track Detail" component={TrackDetailScreen} />
  </Stack.Navigator>
);

export default MainNavigator;

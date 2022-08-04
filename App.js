import React from 'react';
import SearchResultProvider from './src/contexts/search.context';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigators/main.navigator';
import TrackDetaiProvider from './src/contexts/track-detail.context';

const App = () => <MainNavigator />;

const AppContainer = () => (
  <NavigationContainer>
    <SearchResultProvider>
      <TrackDetaiProvider>
        <App />
      </TrackDetaiProvider>
    </SearchResultProvider>
  </NavigationContainer>
);

export default AppContainer;

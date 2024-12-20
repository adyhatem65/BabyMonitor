import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';
import {navigationRef} from '../utils';

const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, IntroSliderScreen, LoginScreen} from '../screens';
import {RootStackParamList} from '../types';

const Stack = createStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  // redux
  // const isFirstTime = useAppSelector(
  //   state => state.firstTimeReducer.isFirstTime,
  // );

  return (
    <Stack.Navigator
      initialRouteName={'IntroSliderScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      {/* {isFirstTime && (
        <Stack.Screen name="IntroSliderScreen" component={IntroSliderScreen} />
      )} */}
      <Stack.Screen name="IntroSliderScreen" component={IntroSliderScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

import React from 'react';
import {StatusBar} from 'react-native';
import MainNavigator from './src/router';
import {COLORS} from './src/utils';

const App = (): React.JSX.Element => {
  return (
    <>
      <MainNavigator />
      <StatusBar backgroundColor={COLORS.WHITE} barStyle={'dark-content'} />
    </>
  );
};

export default App;

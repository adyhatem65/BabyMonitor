import React, {PropsWithChildren} from 'react';
import {View, SafeAreaView, StyleProp, ViewStyle} from 'react-native';
import {styles} from './styles';

type screenContainerPropTypes = {
  style?: StyleProp<ViewStyle>;
};

const ScreenContainer = ({
  children,
  style,
}: PropsWithChildren<screenContainerPropTypes>) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.whiteBackground, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenContainer;

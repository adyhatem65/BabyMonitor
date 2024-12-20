import React, {PropsWithChildren} from 'react';
import {Text as RNText, StyleProp, TextStyle, ColorValue} from 'react-native';
import {COLORS, FONTS} from '../../utils';
import {styles} from './styles';

type textPropTypes = {
  // children?: string;
  style?: StyleProp<TextStyle>;
  // type?: TextTypes;
  fontSize?: number | undefined;
  color?: ColorValue;
  numberOfLines?: number;
};

const Text = ({
  children,
  style,
  color = COLORS.BLACK,
  numberOfLines,
  fontSize = FONTS.FONT_16,
}: PropsWithChildren<textPropTypes & TextStyle>) => {
  return (
    <RNText
      style={[styles.textStyle, {color: color, fontSize: fontSize}, style]}
      numberOfLines={numberOfLines}>
      {children}
    </RNText>
  );
};

export default Text;

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  View,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ColorValue,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import {COLORS, FONTS, wp} from '../../utils';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Text from '../Text';

type buttonPropTypes = {
  text?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  color?: ColorValue;
  type?: 'general' | 'tertiary' | 'checkbox' | 'dropdown' | 'withicon';
  checked?: boolean;
  title?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  titleStyle?: StyleProp<ViewStyle>;
  buttonView?: StyleProp<ViewStyle>;
  iconColor?: string;
};

const Button = ({
  type = 'general',
  children,
  text,
  onPress,
  style,
  textStyle,
  activeOpacity,
  color,
  checked = false,
  title,
  disabled = false,
  icon = 'rotate-ccw',
  titleStyle,
  buttonView,
  iconColor,
  loading,
}: PropsWithChildren<buttonPropTypes & TouchableOpacityProps>) => {
  return (
    <View
      style={[
        buttonView,
        // eslint-disable-next-line react-native/no-inline-styles
        {marginTop: type === 'dropdown' && title ? wp(5) : 0},
      ]}>
      {title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}

      <TouchableOpacity
        style={[styles[type], style, disabled && styles.disabledButton]}
        activeOpacity={activeOpacity || 0.4}
        disabled={disabled}
        onPress={onPress}>
        {children}
        {type === 'checkbox' && (
          <View
            style={[
              styles.box,
              checked ? styles.activeBox : styles.inActiveBox,
            ]}>
            {checked && (
              <FontAwesome5
                name="check"
                color={COLORS.WHITE}
                size={wp(5) <= 15 ? 10 : FONTS.FONT_12}
              />
            )}
          </View>
        )}

        {text && (
          <View>
            {!loading ? (
              <Text
                color={color}
                style={[
                  styles[`${type}Text`],
                  disabled ? {color: COLORS.GRAY} : undefined,
                  textStyle,
                ]}>
                {text}
              </Text>
            ) : (
              <ActivityIndicator size={'small'} color={COLORS.WHITE} />
            )}
          </View>
        )}

        {type === 'dropdown' && (
          <FontAwesome5
            name="chevron-down"
            size={FONTS.FONT_14}
            color={COLORS.GRAY}
          />
        )}
        {type === 'withicon' && (
          <Feather
            name={icon}
            color={
              iconColor ? iconColor : disabled ? COLORS.GRAY : COLORS.BLACK
            }
            size={wp(5)}
            style={styles.iconStyle}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

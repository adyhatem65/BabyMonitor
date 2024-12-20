import {
  View,
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextInput,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import React, {ReactElement} from 'react';
import {styles} from './styles';
import {COLORS, wp} from '../../utils';
import Text from '../Text';

type InputPropTypes = {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftIcon?: ReactElement;
  title?: string;
  enabled?: boolean;
  onLeftIconPress?: () => void;
};

const Input = (props: InputPropTypes & TextInputProps) => {
  return (
    <View style={styles.container}>
      {props.title && (
        <Text style={[styles.titleStyle, props.textStyle]}>{props.title}</Text>
      )}
      <View style={[styles.inputContainer, props.containerStyle]}>
        <TextInput
          autoCapitalize="none"
          value={props.value}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          editable={props.enabled}
          style={[
            styles.inputStyle,
            {paddingLeft: props.leftIcon ? wp(3) : wp(3)},
            props.style,
          ]}
          placeholderTextColor={props.placeholderTextColor || COLORS.GRAY}
          selectionColor={`${COLORS.PRIMARY}70`}
          {...props}
        />
        {props.leftIcon ? (
          <TouchableOpacity
            style={styles.leftIconButton}
            onPress={props.onLeftIconPress}>
            {props.leftIcon}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Input;

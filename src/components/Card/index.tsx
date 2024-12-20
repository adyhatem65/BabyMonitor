import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import {cardProps} from '../../types';
import { COLORS } from '../../utils';

const Card = ({type = 'heart', title, icon, image, value}: cardProps) => {
  return (
    <View
      style={[styles.cardContainerStyle, styles[`${type}CardContainerStyle`]]}>
      <View style={styles.cardHeaderStyle}>
        <View style={styles.iconBoxStyle}>{icon}</View>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
      <Image source={image} style={styles.imageStyle} resizeMode="contain" tintColor={COLORS.WHITE} />
      <Text style={styles.valueStyle}>
        {value} {type === 'heart' ? 'BPM' : type === 'humidity' ? '%' : '°C'}
      </Text>
    </View>
  );
};

export default Card;

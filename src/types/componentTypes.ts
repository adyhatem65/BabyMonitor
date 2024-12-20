import {ImageSourcePropType} from 'react-native';

export type cardProps = {
  type: 'heart' | 'temprature' | 'humidity';
  title: string;
  icon: React.JSX.Element;
  image: ImageSourcePropType;
  value: string | number;
};

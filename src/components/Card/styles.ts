import {StyleSheet} from 'react-native';
import {COLORS, fontFamily, FONTS, SPACINGS, wp} from '../../utils';

export const styles = StyleSheet.create({
  cardContainerStyle: {
    width: wp('44%'),
    height: wp('44%'),
    borderRadius: 15,
    padding: SPACINGS.SMALL_SPACE,
    justifyContent: 'space-between',
    marginBottom: SPACINGS.SMALL_SPACE
  },
  heartCardContainerStyle: {
    backgroundColor: COLORS.RED,
  },
  tempratureCardContainerStyle: {
    backgroundColor: COLORS.ORANGE,
  },
  humidityCardContainerStyle: {
    backgroundColor: COLORS.PRIMARY,
  },
  cardHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACINGS.SMALL_SPACE,
  },
  titleStyle: {
    fontSize: FONTS.FONT_14,
    fontFamily: fontFamily.medium,
    color: COLORS.WHITE,
    marginLeft: SPACINGS.SMALL_SPACE,
  },
  imageStyle: {
    width: '100%',
    height: wp('18%'),
  },
  valueStyle: {
    fontSize: FONTS.FONT_17,
    fontFamily: fontFamily.medium,
    color: COLORS.WHITE,
  },
  iconBoxStyle: {
    width: wp(10),
    height: wp(10),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },
});

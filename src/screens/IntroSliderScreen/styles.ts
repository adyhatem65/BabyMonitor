import {StyleSheet} from 'react-native';
import {COLORS, SPACINGS, hp, wp, FONTS, fontFamily} from '../../utils';

export const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACINGS.GENERAL_SPACE,
  },
  slideText: {
    textAlign: 'center',
    fontFamily: fontFamily.light,
    fontSize: FONTS.FONT_16,
  },
  slideTitle: {
    textAlign: 'center',
    fontFamily: fontFamily.bold,
    fontSize: FONTS.FONT_22,
  },
  slideImage: {
    width: wp(30),
    height: wp(30),
  },
  dotStyle: {
    height: 4,
    backgroundColor: COLORS.LIGHT_GRAY,
    width: wp(7),
    borderRadius: wp(10),
  },
  footer: {
    height: hp('20%'),
    paddingHorizontal: SPACINGS.GENERAL_SPACE,
  },
  paginationwWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACINGS.GENERAL_SPACE,
  },
  buttonStyle: {
    marginBottom: SPACINGS.SMALL_SPACE,
  },
  buttonTextStyle: {
    fontSize: FONTS.FONT_18,
    fontFamily: fontFamily.medium,
  },
  textStyle: {
    fontFamily: fontFamily.medium,
  },
  footerText: {
    fontSize: FONTS.FONT_17,
    color: COLORS.GRAY,
    fontFamily: fontFamily.medium,
  },
  footerTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    flex: 1,
    // backgroundColor: '#f00',
  },
  lottieStyle: {
    width: wp(80),
    height: wp(80),
  },
  slideTextWrapper: {
    marginTop: SPACINGS.GENERAL_SPACE * 2,
  },
});

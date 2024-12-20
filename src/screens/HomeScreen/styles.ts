import {StyleSheet} from 'react-native';
import {COLORS, fontFamily, FONTS, SPACINGS, wp} from '../../utils';

export const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACINGS.GENERAL_SPACE - wp(1),
  },
  avatarStyle: {
    width: wp('18%'),
    height: wp('18%'),
    marginVertical: SPACINGS.SMALL_SPACE,
  },
  headerTextWrapperStyle: {
    paddingLeft: SPACINGS.SMALL_SPACE,
  },
  helloTextStyle: {
    fontSize: FONTS.FONT_16,
    fontFamily: fontFamily.light,
    color: COLORS.BLACK2,
    lineHeight: 22,
  },
  nameStyle: {
    fontSize: FONTS.FONT_16,
    fontFamily: fontFamily.medium,
    color: COLORS.BLACK,
    lineHeight: 22,
  },
  buttonWarpperStyle: {
    padding: SPACINGS.GENERAL_SPACE,
  },
  buttonStyle: {
    // height: 60,
  },
  titleStyle: {
    fontSize: FONTS.FONT_18,
    color: COLORS.BLACK,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    marginVertical: SPACINGS.GENERAL_SPACE,
  },
  contentWrapperStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceNameStyle: {
    fontSize: FONTS.FONT_20,
    fontFamily: fontFamily.bold,
    color: COLORS.BLACK,
    marginBottom: SPACINGS.SMALL_SPACE
  },
  dataWrapperViewStyle: {
    flex: 1,
    paddingHorizontal: SPACINGS.GENERAL_SPACE,
    paddingTop: SPACINGS.GENERAL_SPACE,
  },
  heartRateText: {
    fontSize: 25,
    marginTop: 15,
  },
  ctaButton: {
    backgroundColor: '#FF6060',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  noDevicesTextStyle: {
    fontSize: FONTS.FONT_20,
    fontFamily: fontFamily.bold,
    marginHorizontal: SPACINGS.GENERAL_SPACE,
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  cardsRowStyle: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACINGS.SMALL_SPACE,
  },
});

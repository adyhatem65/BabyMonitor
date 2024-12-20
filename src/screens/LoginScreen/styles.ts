import {StyleSheet} from 'react-native';
import {COLORS, FONTS, fontFamily, wp} from '../../utils';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scrollViewStyle: {
    padding: wp(5),
  },
  imageWrapper: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: wp(5),
  },
  imageStyle: {
    width: wp('35%'),
    height: wp('35%'),
    // backgroundColor: '#f00'
  },
  welcomeText: {
    fontSize: 25,
    textAlign: 'center',
    color: COLORS.PRIMARY,
    fontFamily: fontFamily.bold,
  },
  text: {
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    fontSize: FONTS.FONT_15,
    color: COLORS.BLACK2,
  },
  inputTitleStyle: {
    color: COLORS.BLACK,
    fontFamily: fontFamily.medium,
    fontSize: 17,
    marginBottom: 10,
  },
  inputContainerStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 47,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 7,
  },
  inputPassStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 47,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 7,
  },
  icon: {
    width: wp(6),
    height: wp(6),
  },
  forgetPassWrapper: {
    width: '100%',
    paddingTop: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: '600',
  },
  phoneInputContainerStyle: {
    flex: 1,
    height: 47,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 7,
  },
  phoneInputTextInputStyle: {
    borderRadius: 7,
    height: 47,
    padding: 0,
    margin: 0,
  },
  phoneInputTextContainerStyle: {
    borderRadius: 7,
    paddingHorizontal: 0,
  },
  buttonStyle: {
    marginVertical: wp(5),
  },
  dontHanveAnAccountWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dontHaveAnAccount: {
    fontSize: FONTS.FONT_14,
    color: COLORS.GRAY2,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
  },
  createAccount: {
    fontSize: FONTS.FONT_14,
    color: COLORS.PRIMARY,
  },
  boldText: {
    fontFamily: fontFamily.medium,
  },
  remeberText: {
    color: COLORS.GRAY2,
    left: wp(2),
  },
  createAccountBtn: {
    paddingRight: 0,
  },
});

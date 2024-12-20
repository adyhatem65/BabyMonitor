import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SPACINGS, wp, fontFamily} from '../../utils';

export const styles = StyleSheet.create({
  general: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
  tertiary: {
    padding: SPACINGS.SMALL_SPACE,
    backgroundColor: 'transparent',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  generalText: {
    fontSize: FONTS.FONT_18,
    fontFamily: fontFamily.medium,
    color: COLORS.WHITE,
  },
  tertiaryText: {
    fontSize: FONTS.FONT_14,
    fontFamily: fontFamily.medium,
    color: COLORS.PRIMARY,
  },
  checkboxText: {
    fontSize: FONTS.FONT_14,
    fontFamily: fontFamily.medium,
    color: COLORS.GRAY,
  },
  dropdownText: {
    fontSize: FONTS.FONT_14,
    fontFamily: fontFamily.light,
    color: COLORS.GRAY2,
  },
  box: {
    minWidth: 15,
    minHeight: 15,
    width: wp(5),
    height: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: wp(2),
  },
  activeBox: {
    backgroundColor: COLORS.PRIMARY,
  },
  inActiveBox: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1.5,
    borderColor: COLORS.GRAY,
  },
  titleStyle: {
    fontSize: FONTS.FONT_15,
    fontFamily: fontFamily.semiBold,
    marginBottom: wp(2),
    alignSelf: 'flex-start',
  },
  withicon: {
    padding: SPACINGS.SMALL_SPACE,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  withiconText: {
    fontSize: FONTS.FONT_15,
    fontFamily: fontFamily.medium,
    color: COLORS.BLACK,
  },
  iconStyle: {
    marginLeft: wp(2),
  },
  disabledButton: {
    backgroundColor: COLORS.LIGHT_GRAY
  }
});

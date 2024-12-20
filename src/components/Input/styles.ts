import {StyleSheet} from 'react-native';
import {COLORS, FONTS, wp, fontFamily} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: wp(5),
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 10,
  },
  inputStyle: {
    flex: 1,
    padding: 0,
    paddingRight: wp(3),
    color: COLORS.BLACK,
    fontSize: FONTS.FONT_14,
    fontFamily: fontFamily.medium,
  },
  titleStyle: {
    fontSize: FONTS.FONT_15,
    marginBottom: wp(2),
    alignSelf: 'flex-start',
    fontFamily: fontFamily.semiBold,
  },
  leftIconButton: {
    paddingHorizontal: wp(3),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

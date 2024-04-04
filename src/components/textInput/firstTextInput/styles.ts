import { Animated, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics';

const getStyles = (isDarkMode: boolean, fadeBorder: Animated.Value) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginVertical: verticalScale(1),
    },
    textInputNameContainer: {
      marginLeft: horizontalScale(10),
    },
    textInputName: {
      color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
      fontSize: moderateScale(13),
      fontWeight: '600',
    },
    textInputBox: {
      backgroundColor: isDarkMode ? Colors.darkTyrianPurple : Colors.lightPeach,
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(10),
      borderRadius: moderateScale(5),
      opacity: 50,
    },
    animatedShadow: {
      opacity: fadeBorder,
      backgroundColor: isDarkMode ? Colors.lightTyrianPurple : Colors.darkPeach,
      position: 'absolute',
      top: verticalScale(2),
      left: horizontalScale(2),
      width: '100%',
      height: '100%',
      zIndex: -1,
      borderRadius: moderateScale(6),
    },
  });
};

export default getStyles;

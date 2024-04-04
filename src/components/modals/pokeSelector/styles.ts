import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/metrics';

export default function getStyles() {
  return StyleSheet.create({
    modalBackgroundView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.transparentBlack,
      paddingVertical: Platform.OS === 'android' ? verticalScale(16) : 0,
    },

    modalView: {
      flex: 1,
      width: '96%',
      opacity: 1,
      overflow: 'hidden',
      borderRadius: moderateScale(20),
      paddingHorizontal: horizontalScale(4),
      alignItems: 'center',
    },

    flatListView: {
      borderRadius: moderateScale(16),
      flex: 1,
      width: '100%',
    },
  });
}

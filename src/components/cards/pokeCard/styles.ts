import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../../utils/metrics';

export default function getStyles() {
  return StyleSheet.create({
    pressCard: {
      flex: 1,
      marginVertical: verticalScale(4),
      backgroundColor: '#474747b2',
      height: horizontalScale(82),
      borderRadius: moderateScale(16),

      elevation: 0,

      /** Android */

      /** iOS */
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },

    largeImageView: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      borderRadius: moderateScale(16),
      opacity: 0.7,
      overflow: 'hidden',
    },

    largeImage: {
      height: '100%',
      width: '360%',
      alignSelf: 'center',
    },

    insideCardView: {
      flex: 1,
      marginVertical: verticalScale(4),
      marginHorizontal: horizontalScale(4),
      flexDirection: 'row',
    },

    pokeImageView: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    imageCircle: {
      width: horizontalScale(80),
      height: verticalScale(80),
    },

    infoView: {
      flex: 4,
      justifyContent: 'space-around',
      paddingHorizontal: horizontalScale(8),
    },

    numberTextView: {
      flex: 1,
      justifyContent: 'center',
    },
    nameTextView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },

    infoText: {
      fontSize: moderateScale(16),
    },

    typeIconsView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingEnd: horizontalScale(8),
    },

    // isLoading = true
    emptyInfoView: {
      width: '100%',
      height: 24,
      borderRadius: 16,
      backgroundColor: Colors.darkTyrianPurple,
    },
    loadingCircleView: {
      width: 60,
      height: 60,
      backgroundColor: Colors.darkTyrianPurple,
      borderRadius: 32,
      opacity: 1,
    },
  });
}

import { Animated, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';

export default function getStyles(changeFlag?: Animated.Value) {
  return StyleSheet.create({
    pressCard: {
      flex: 1,
      width: '100%',
    },

    pokeCardView: {
      backgroundColor: Colors.jordyBlue,
      opacity: changeFlag,
      height: 120,
      borderRadius: 16,
      shadowColor: 'black',
      marginVertical: 4,

      /** Android */
      elevation: 8,

      /** iOS */
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
    },

    innerView: {
      flex: 1,
      margin: 4,
      flexDirection: 'row',
    },

    pokeImageView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    imageCircle: {
      width: 180,
      height: 180,
    },

    infoView: {
      flex: 3,
      justifyContent: 'center',
      paddingHorizontal: 8,
    },

    numberTextView: {
      flex: 1,
      justifyContent: 'center',
    },
    nameTextView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      // ver: 20,
    },

    infoText: {
      fontSize: 22,
    },

    // isLoading = true
    loadingNumberTextView: {
      flex: 1,
      justifyContent: 'center',
    },
    loadingNameTextView: {
      flex: 1,
      justifyContent: 'center',
    },

    loadingInfoText: {
      fontSize: 22,
      width: '100%',
      backgroundColor: Colors.loadingJordyBlue,
      // borderRadius: 16,
    },

    elementView: {
      flex: 1,
      alignItems: 'flex-end',
      paddingTop: 8,
      paddingEnd: 8,
    },

    elementIcon: {
      width: 32,
      height: 32,
      // color: 'black',
      // backgroundColor: 'orange',
      borderRadius: 16,
    },


    largeImageView: {
      height: '100%',
      width: '80%',
      position: 'absolute',
      alignSelf: 'center',
      opacity: 0.4,
      // backgroundColor: 'white',
    },

    largeImage: {
      height: '100%',
      width: '360%',
      alignSelf: 'center',
      opacity: 0.4,
    },
  });
}

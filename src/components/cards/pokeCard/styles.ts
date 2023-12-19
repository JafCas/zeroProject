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
    },
    elementView: {
      flex: 1,
      alignItems: 'flex-end',
    },
    elementIcon: {
      width: 32,
      height: 32,
      // color: 'black',
      marginRight: 8,
      marginTop: 8,
    },
    infoText: {
      fontSize: 22,
    },
    largeImageView: {
      height: '100%',
      width: '80%',
      position: 'absolute',
      alignSelf: 'center',
      opacity: 0.4,
    },
    largeImage: {
      height: '100%',
      width: '360%',
      alignSelf: 'center',
      opacity: 0.4,
    },
  });
}

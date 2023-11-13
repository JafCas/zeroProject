import { StyleSheet } from 'react-native';

export default function getStyles() {
  return StyleSheet.create({
    pressCard: {
      width: '100%',
    },
    pokeCardView: {
      backgroundColor: 'white',
      height: 120,
      borderRadius: 8,
      shadowColor: 'black',

      /** Android */
      elevation: 8,

      /** iOS */
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 4,
      marginVertical: 4,
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
    // TODO: change for pkimage
    imageCircle: {
      width: 70,
      height: 70,
      borderRadius: 40,
      backgroundColor: 'white',
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
      backgroundColor: 'beige',
      margin: 4,
    },
    infoText: {
      fontSize: 22,
    },
    largeImageView: {
      height: '100%',
      width: '80%',
      // backgroundColor: 'aqua',
      position: 'absolute',
      alignSelf: 'center',
      opacity: 0.4,
    },
  });
}

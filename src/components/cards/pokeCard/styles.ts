import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';

export default function getStyles() {
  return StyleSheet.create({
    pressCard: {
      flex: 1,
      marginVertical: 4,
    },

    pokeCardView: {
      backgroundColor: Colors.jordyBlue,
      height: 82,
      borderRadius: 16,
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
      width: 64,
      height: 64,
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
      width: '100%',
      position: 'absolute',
      alignSelf: 'center',
      borderRadius: 16,
      opacity: 0.4,
      overflow: 'hidden',
    },

    largeImage: {
      height: '100%',
      width: '360%',
      alignSelf: 'center',
    },
  });
}

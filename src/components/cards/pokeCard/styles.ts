import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';

export default function getStyles() {
  return StyleSheet.create({
    pressCard: {
      flex: 1,
      marginVertical: 4,
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
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    imageCircle: {
      width: 72,
      height: 72,
    },

    infoView: {
      flex: 4,
      justifyContent: 'space-around',
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

    elementView: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingTop: 8,
      paddingEnd: 8,
    },

    elementIcon: {
      width: 32,
      height: 32,
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

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
    loadingNameTextView: {
      justifyContent: 'center',
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: 'white',
    },
    loadingCircleView: {
      width: 60,
      height: 60,
      backgroundColor: Colors.darkTyrianPurple,
      borderRadius: 32,
      opacity: 1,
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

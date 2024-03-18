import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';

export default function getStyles() {
  return StyleSheet.create({
    pressCard: {
      flex: 1,
      marginVertical: 4,
      backgroundColor: '#474747b2',
      height: 82,
      borderRadius: 16,
    },

    largeImageView: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      borderRadius: 16,
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
      margin: 4,
      flexDirection: 'row',
    },

    pokeImageView: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    imageCircle: {
      width: 80,
      height: 80,
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
    },

    infoText: {
      fontSize: 22,
    },

    typeIconsView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingEnd: 8,
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

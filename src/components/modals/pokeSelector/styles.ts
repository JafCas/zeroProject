import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';

export default function getStyles() {
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      alignItems: 'center',
      backgroundColor: '#800080a0',
      // backgroundColor:
      //   Platform.OS === 'android' ? Colors.darkPeach : Colors.loadingJordyBlue,
      borderRadius: 20,
      width: '96%',
      height: '96%',
      opacity: 1,

      /** Android */
      elevation: 5,

      /** iOS */
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.6,
      shadowRadius: 8,
    },
  });
}

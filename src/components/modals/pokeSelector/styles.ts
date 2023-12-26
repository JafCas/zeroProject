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
      flex: 1,
      alignItems: 'center',
      // backgroundColor: '#800080a0',
      // backgroundColor:
      //   Platform.OS === 'android' ? Colors.darkPeach : Colors.loadingJordyBlue,
      borderRadius: 20,
      width: '96%',
      height: '96%',
      opacity: 1,

      /** Android */
      elevation: 5,

      /** iOS */
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    flatListView: {
      borderRadius: 16,
      margin: 6,
      flex: 1,
      width: '100%',
    },
  });
}

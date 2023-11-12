import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';

export default function getStyles() {
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    modalView: {
      backgroundColor: Colors.lightPeach,
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '99%',
      height: Platform.OS === 'android' ? '92%' : '88%',
      opacity: 0.9,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      opacity: 1,
      backgroundColor: 'white',
    },
  });
}

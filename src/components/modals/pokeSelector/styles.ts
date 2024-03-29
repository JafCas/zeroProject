import { Platform, StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';

export default function getStyles() {
  return StyleSheet.create({
    modalBackgroundView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000086',
    },
    modalView: {
      flex: 1,
      alignItems: 'center',
      borderRadius: 20,
      width: '96%',
      opacity: 1,
      paddingHorizontal: 4,

      /** Android */
      elevation: 5,

      /** iOS */
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    flatListView: {
      borderRadius: 16,
      flex: 1,
      width: '100%',
    },
  });
}

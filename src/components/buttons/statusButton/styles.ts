import { StyleSheet } from 'react-native';
import { Status } from '../../../assets/colors/mainColors';

const getStyles = (statusContext: boolean) => {
  return StyleSheet.create({
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusCircle: {
      height: 30,
      width: 30,
      borderRadius: 16,
      backgroundColor: statusContext ? Status.active : Status.inactive,
      marginHorizontal: 10,
    },
    statusText: {
      color: statusContext ? Status.active : Status.inactive,
      fontSize: 16,
    },
  });
};

export default getStyles;

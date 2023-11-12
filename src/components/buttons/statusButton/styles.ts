import { StyleSheet } from 'react-native';
import { Status } from '../../../assets/colors/mainColors';

const getStyles = (statusContext: boolean) => {
  return StyleSheet.create({
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusCircle: {
      marginLeft: 10,
      marginRight: 5,
      color: statusContext ? Status.active : Status.inactive,
    },
    statusText: {
      color: statusContext ? Status.active : Status.inactive,
      fontSize: 16,
    },
  });
};

export default getStyles;

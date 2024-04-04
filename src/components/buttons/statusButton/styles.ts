import { StyleSheet } from 'react-native';
import { Status } from '../../../assets/colors/mainColors';
import { horizontalScale, moderateScale } from '../../../utils/metrics';

const getStyles = (isStatusActive: boolean) => {
  return StyleSheet.create({
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusCircle: {
      marginLeft: horizontalScale(10),
      marginRight: horizontalScale(5),
      color: isStatusActive ? Status.active : Status.inactive,
    },
    statusText: {
      color: isStatusActive ? Status.active : Status.inactive,
      fontSize: moderateScale(16),
    },
  });
};

export default getStyles;

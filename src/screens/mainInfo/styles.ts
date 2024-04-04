import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Status } from '../../assets/colors/mainColors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

const getStyles = (isDarkMode: boolean, isStatusActive: boolean) => {
  return StyleSheet.create({
    safeAreaView: {
      backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
      flex: 1,
    },
    container: {
      backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
      flex: 1,
      paddingHorizontal: horizontalScale(8),
      paddingVertical: verticalScale(8),
    },
    // Status section
    statusView: {
      justifyContent: 'center',
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusCircle: {
      height: verticalScale(30),
      width: horizontalScale(30),
      borderRadius: moderateScale(16),
      backgroundColor: isStatusActive ? Status.active : Status.inactive,
      marginHorizontal: horizontalScale(10),
    },
    statusText: {
      color: isStatusActive ? Status.active : Status.inactive,
      fontSize: moderateScale(16),
    },

    // Header
    headerView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(15),
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: moderateScale(26),
      fontWeight: 'bold',
      color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
    },

    //TODO: Change for toggle icon
    square: {
      backgroundColor: Colors.whiteBorder,
      height: verticalScale(40),
      width: horizontalScale(40),
    },
    optionsView: {
      height: 30,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    optionsText: {
      paddingHorizontal: horizontalScale(5),
      paddingVertical: verticalScale(5),
      fontWeight: '600',
      color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
    },

    infoView: {
      flex: 9,
      alignItems: 'center',
    },
    flatListView: {
      flex: 1,
      width: Dimensions.get('window').width,
    },
    slider: {
      flex: 1,
      width: Dimensions.get('window').width,
      marginHorizontal: horizontalScale(0),
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(10),

      backgroundColor: Colors.newGray,
    },
  });
};

export default getStyles;

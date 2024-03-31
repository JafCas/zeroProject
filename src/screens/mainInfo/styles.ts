import { Dimensions, StyleSheet } from 'react-native';
import { Colors, Status } from '../../assets/colors/mainColors';
import { horizontalScale } from '../../utils/metrics';

const getStyles = (isDarkMode: boolean, isStatusActive: boolean) => {
  return StyleSheet.create({
    safeAreaView: {
      backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
      flex: 1,
    },
    container: {
      backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
      flex: 1,
      padding: 8,
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
      height: 30,
      width: 30,
      borderRadius: 16,
      backgroundColor: isStatusActive ? Status.active : Status.inactive,
      marginHorizontal: 10,
    },
    statusText: {
      color: isStatusActive ? Status.active : Status.inactive,
      fontSize: 16,
    },

    // Header
    headerView: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: 26,
      fontWeight: 'bold',
      color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
    },

    //TODO: Change for toggle icon
    square: {
      backgroundColor: 'white',
      height: 40,
      width: 40,
    },
    optionsView: {
      height: 30,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    optionsText: {
      fontWeight: '600',
      color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
    },

    infoView: {
      flex: 9,
      alignItems: 'center',
    },
    flatListView: {
      flex: 1,
      width: '100%',
      backgroundColor: 'blue',
    },
    slider: {
      flex: 1,
      // height: verticalScale(200),
      // height: '100%',
      // width: horizontalScale(150),
      // width: '100%',
      width: Dimensions.get('window').width - horizontalScale(40),
      backgroundColor: 'lightgrey',
      // margin: 10,
      marginHorizontal: horizontalScale(10),
    },
  });
};

export default getStyles;

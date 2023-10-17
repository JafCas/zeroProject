import { StyleSheet } from 'react-native';
import { Colors, Status } from '../../assets/colors/mainColors';

const styles = StyleSheet.create({
  safeAreaView: (isDarkMode: boolean) => ({
    backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
    flex: 1,
  }),

  container: (isDarkMode: boolean) => ({
    backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
    flex: 1,
    padding: 8,
  }),

  // Status section
  statusButtonContainer: {
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusCircle: isStatusActive => ({
    height: 30,
    width: 30,
    borderRadius: 16,
    backgroundColor: isStatusActive ? Status.active : Status.inactive,
    marginHorizontal: 10,
  }),
  statusText: isStatusActive => ({
    color: isStatusActive ? Status.active : Status.inactive,
    fontSize: 16,
  }),

  // Header
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  headerText: (isDarkMode: boolean) => ({
    fontSize: 26,
    fontWeight: 'bold',
    color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
  }),

  //TODO: Change for toggle icon
  square: {
    backgroundColor: 'white',
    height: 40,
    width: 40,
  },
  optionsContainer: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingEnd: 40,
  },
  optionsText: (isDarkMode: boolean) => ({
    fontWeight: '600',
    color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
  }),
  infoContainer: {
    flex: 9,
    paddingTop: 100,
    alignItems: 'center',
  },
});

export default styles;

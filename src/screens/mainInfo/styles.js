import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/colors/mainColors';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    margin: 16,
  },

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
    backgroundColor: isStatusActive ? 'green' : 'red',
    marginHorizontal: 10,
  }),
  statusText: isStatusActive => ({
    color: isStatusActive ? 'green' : 'red',
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
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
  },

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
    paddingEnd: 30,
  },
  optionsText: {
    fontWeight: '600',
  },
  infoContainer: {
    flex: 9,
    backgroundColor: 'beige',
    paddingTop: 100,
    alignItems: 'center',
  },
});

export default styles;

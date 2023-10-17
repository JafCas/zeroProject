import { StyleSheet } from 'react-native';
import { Colors } from '../../../assets/colors/mainColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 1,
  },
  textInputNameContainer: {
    marginLeft: 10,
  },
  textInputName: isDarkMode => ({
    color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
    fontSize: 13,
    fontWeight: '600',
  }),
  textInputBox: isDarkMode => ({
    backgroundColor: isDarkMode ? Colors.darkTyrianPurple : Colors.lightPeach,
    padding: 10,
    borderRadius: 5,
    opacity: 50,
  }),
  animatedShadow: (isDarkMode, fadeBorder) => ({
    opacity: fadeBorder,
    backgroundColor: isDarkMode ? Colors.lightTyrianPurple : Colors.darkPeach,
    position: 'absolute',
    top: 2,
    left: 2,
    width: '100%',
    height: '100%',
    zIndex: -1,
    borderRadius: 6,
  }),
});

export default styles;

import { StyleSheet } from 'react-native';
import { Colors } from '../../assets/colors/mainColors';

const getStyles = (isDarkMode: boolean, isTextInputSelected: boolean) => {
  return StyleSheet.create({
    safeAreaView: {
      backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
      flex: 1,
    },
    firstSectionContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 25,
    },
    titleTextContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      marginBottom: 20,
    },
    titleText: {
      fontSize: 46,
      color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
    },
    secondSectionContainer: {
      flex: isTextInputSelected ? 2 : 1,
    },
    textInputSection: { flex: 1, width: '100%', paddingVertical: 20 },
    thirdSection: {
      flex: 1,
      paddingTop: 0,
    },
  });
};

export default getStyles;

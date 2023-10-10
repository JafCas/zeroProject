import React, {useEffect, useState} from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {FirstTextInput} from './src/components/TextInput/FirstTextInput';
import {Colors} from './src/assets/colors/mainColors';
import GenericButton from './src/components/Buttons/GenericButton';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [buttonColor, setButtonColor] = useState(
    isDarkMode ? Colors.peach : Colors.tyrianPurple,
  );
  const [isTextInputSelected, setIsTextInputSelected] = useState(false);

  const onSelecting = isSelected => {
    setIsTextInputSelected(isSelected);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
    flex: 1,
  };
  const styles = StyleSheet.create({
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
    textInputSection: {flex: 1, width: '100%', paddingVertical: 20},
    thirdSection: {
      flex: 1,
      paddingTop: 0,
    },

    buttonContainer: {
      backgroundColor: buttonColor,
      marginHorizontal: '30%',
      borderRadius: 30,
      padding: 10,
      alignItems: 'center',
      elevation: 3,
    },
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <KeyboardAvoidingView
        style={backgroundStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.firstSectionContainer}>
              <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>Hello there</Text>
              </View>
            </View>
            <View style={styles.secondSectionContainer}>
              <View style={styles.textInputSection}>
                <FirstTextInput
                  valueName={'Second Value'}
                  placeHolderName={'Second Input'}
                  onSelecting={onSelecting}
                />
                <FirstTextInput
                  valueName={'Second Value'}
                  placeHolderName={'Second Input'}
                  onSelecting={onSelecting}
                />
              </View>
            </View>
            <View style={styles.thirdSection}>
              <GenericButton />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;

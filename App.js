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
import {Colors} from './src/interface/colors/mainColors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [buttonColor, setButtonColor] = useState(
    isDarkMode ? Colors.peach : Colors.tyrianPurple,
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
    flex: 1,
  };
  const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 25,
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
      flex: 1,
    },
    textInputSection: {flex: 1, width: '100%', paddingVertical: 20},
    thirdSection: {flex: 1, paddingTop: 40},
    //
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    textInputNameContainer: {
      marginLeft: 10,
      marginBottom: 4,
    },
    textInputName: {
      color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
      fontSize: 13,
      fontWeight: '600',
    },
    textInputBox: {
      backgroundColor: isDarkMode ? '#58002C' : '#F8E9C9',
      padding: 10,
      borderBottomWidth: 2,
      borderRightWidth: 2,
      borderRadius: 5,
      borderColor: '#C28F21',
      opacity: 50,
    },
    //
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.titleContainer}>
            <View style={styles.titleTextContainer}>
              <Text style={styles.titleText}>Hello there</Text>
            </View>
            <View style={styles.secondSectionContainer}>
              <View style={styles.textInputSection}>
                <FirstTextInput
                  valueName={'Second Value'}
                  placeHolderName={'Second Input'}
                />
                <FirstTextInput
                  valueName={'Second Value'}
                  placeHolderName={'Second Input'}
                />
              </View>
            </View>
            <View style={styles.thirdSection}>
              <Pressable
                style={{
                  backgroundColor: buttonColor,
                  marginHorizontal: '30%',
                  borderRadius: 30,
                  padding: 10,
                  alignItems: 'center',
                  elevation: 3,
                }}
                onPressIn={() => {
                  setButtonColor(Colors.rose);
                  console.log('in');
                }}
                onPressOut={() => {
                  setButtonColor(
                    isDarkMode ? Colors.peach : Colors.tyrianPurple,
                  );
                  console.log('out');
                }}
                onPress={() => {
                  console.log('first');
                }}>
                <Text
                  style={{
                    color: isDarkMode ? Colors.tyrianPurple : Colors.peach,
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  Button
                </Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;

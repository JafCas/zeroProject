import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
  useColorScheme,
} from 'react-native';

// Components
import { FirstTextInput } from '../../components/textInput/firstTextInput/FirstTextInput';
import GenericButton from '../../components/buttons/GenericButton';

// Assets
import { Colors } from '../../assets/colors/mainColors';

// Styles
import styles from './styles';
import * as Constants from '../../constants';

const SignIn = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isTextInputSelected, setIsTextInputSelected] = useState(false);

  /**
   * Get back isSelected flag from child component
   * to set 2nd container flex value.
   * @param isSelected the flag which will be returned from child
   */
  const handleSelecting = isSelected => {
    setIsTextInputSelected(isSelected);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.tyrianPurple : Colors.peach,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <KeyboardAvoidingView
        style={backgroundStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.firstSectionContainer}>
              <View style={styles.titleTextContainer}>
                <Text style={styles.titleText(isDarkMode)}>
                  {Constants.GREATINGS}
                </Text>
              </View>
            </View>
            <View style={styles.secondSectionContainer(isTextInputSelected)}>
              <View style={styles.textInputSection}>
                <FirstTextInput
                  placeHolderName={Constants.First_name}
                  valueName={Constants.First_value}
                  onSelecting={handleSelecting}
                />
                <FirstTextInput
                  placeHolderName={Constants.Second_name}
                  valueName={Constants.Second_value}
                  onSelecting={handleSelecting}
                />
              </View>
            </View>
            <View style={styles.thirdSection}>
              <GenericButton
                onPress={() => {
                  navigation.navigate('MainInfo', {
                    otherParam: 'Ola we',
                  });
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;

import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';

import * as Constants from '../../constants';

import { Colors } from '../../assets/colors/mainColors';

export default function GenericButton({ onPress }) {
  const isDarkMode = useColorScheme() === 'dark';
  const [buttonColor, setButtonColor] = useState(
    isDarkMode ? Colors.peach : Colors.tyrianPurple,
  );
  return (
    <Pressable
      style={styles.buttonContainer(buttonColor)}
      onPressIn={() => {
        setButtonColor(Colors.rose);
        console.log('in');
      }}
      onPressOut={() => {
        setButtonColor(isDarkMode ? Colors.peach : Colors.tyrianPurple);
        console.log('out');
      }}
      onPress={() => {
        console.log('first');
        onPress();
      }}
    >
      <Text style={styles.textStyle(isDarkMode)}>
        {Constants.Logging_button}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: buttonColor => ({
    backgroundColor: buttonColor,
    marginHorizontal: '30%',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    elevation: 3,
  }),
  textStyle: isDarkMode => ({
    color: isDarkMode ? Colors.tyrianPurple : Colors.peach,
    fontSize: 16,
    fontWeight: '600',
  }),
});

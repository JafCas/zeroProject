import React, { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import * as Constants from '../../constants';

import { Colors } from '../../assets/colors/mainColors';
import { useTheme } from '../../context/ThemeContext';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

interface GenericButtonProps {
  onPress: () => void;
}

export default function GenericButton({ onPress }: GenericButtonProps) {
  const isDarkMode = useTheme();

  const [buttonColor, setButtonColor] = useState(
    isDarkMode ? Colors.peach : Colors.tyrianPurple,
  );

  const styles = getStyles(isDarkMode, buttonColor);
  return (
    <Pressable
      style={styles.buttonContainer}
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
      <Text style={styles.textStyle}>{Constants.Logging_button}</Text>
    </Pressable>
  );
}

const getStyles = (isDarkMode: boolean, buttonColor: string) => {
  return StyleSheet.create({
    buttonContainer: {
      backgroundColor: buttonColor,
      marginHorizontal: '30%',
      borderRadius: moderateScale(30),
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(10),
      alignItems: 'center',
      elevation: 3,
    },
    textStyle: {
      color: isDarkMode ? Colors.tyrianPurple : Colors.peach,
      fontSize: moderateScale(16),
      fontWeight: '600',
    },
  });
};

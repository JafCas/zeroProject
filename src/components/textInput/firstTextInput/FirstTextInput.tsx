import React, { useRef } from 'react';
import { Animated, Text, TextInput, View } from 'react-native';

import { useTheme } from '../../../context/ThemeContext';
import getStyles from './styles';

interface FirstTextInputProps {
  valueName: string;
  placeHolderName: string;
  onSelecting: (isSelected: boolean) => void;
}

export const FirstTextInput = ({
  valueName,
  placeHolderName,
  onSelecting,
}: FirstTextInputProps) => {
  const isDarkMode = useTheme();

  const fadeBorder = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 0.5 seconds
    Animated.timing(fadeBorder, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 0.5 seconds
    Animated.timing(fadeBorder, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const styles = getStyles(isDarkMode, fadeBorder);

  return (
    <View style={styles.container}>
      <View style={styles.textInputNameContainer}>
        <Text style={styles.textInputName}>{placeHolderName}</Text>
      </View>
      <View>
        <TextInput
          placeholder={valueName}
          style={styles.textInputBox}
          onFocus={() => {
            onSelecting(true);
            fadeIn();
          }}
          onEndEditing={() => {
            onSelecting(false);
            fadeOut();
          }}
        />
        <Animated.View style={styles.animatedShadow} />
      </View>
    </View>
  );
};

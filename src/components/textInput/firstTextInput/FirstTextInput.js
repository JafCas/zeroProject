import React, { useRef } from 'react';
import { Animated, Text, TextInput, View, useColorScheme } from 'react-native';

import styles from './styles';

export const FirstTextInput = ({ valueName, placeHolderName, onSelecting }) => {
  const isDarkMode = useColorScheme() === 'dark';

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

  return (
    <View style={styles.container}>
      <View style={styles.textInputNameContainer}>
        <Text style={styles.textInputName(isDarkMode)}>{placeHolderName}</Text>
      </View>
      <View>
        <TextInput
          placeholder={valueName}
          style={styles.textInputBox(isDarkMode)}
          onFocus={() => {
            onSelecting(true);
            fadeIn();
          }}
          onEndEditing={() => {
            onSelecting(false);
            fadeOut();
          }}
        />
        <Animated.View style={styles.animatedShadow(isDarkMode, fadeBorder)} />
      </View>
    </View>
  );
};

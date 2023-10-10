import React, { useRef } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import { Colors } from '../../assets/colors/mainColors';

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
    backgroundColor: isDarkMode ? '#58002C' : '#F8E9C9',
    padding: 10,
    borderRadius: 5,
    opacity: 50,
  }),
  animatedShadow: (isDarkMode, fadeBorder) => ({
    opacity: fadeBorder,
    backgroundColor: isDarkMode ? '#96014c' : '#C28F21',
    position: 'absolute',
    top: 2,
    left: 2,
    width: '100%',
    height: '100%',
    zIndex: -1,
    borderRadius: 6,
  }),
});

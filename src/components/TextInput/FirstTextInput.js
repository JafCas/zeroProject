import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, useColorScheme} from 'react-native';
import {Colors} from '../../assets/colors/mainColors';

export const FirstTextInput = ({valueName, placeHolderName, onSelecting}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [textInputBorderWith, setTextInputBorderWith] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.textInputNameContainer}>
        <Text style={styles.textInputName(isDarkMode)}>{placeHolderName}</Text>
      </View>
      <TextInput
        placeholder={valueName}
        style={styles.textInputBox(textInputBorderWith, isDarkMode)}
        onFocus={() => {
          setTextInputBorderWith(2);
          onSelecting(true);
        }}
        onEndEditing={() => {
          setTextInputBorderWith(0);
          onSelecting(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInputNameContainer: {
    marginLeft: 10,
    marginBottom: 4,
  },
  textInputName: isDarkMode => ({
    color: isDarkMode ? Colors.peach : Colors.tyrianPurple,
    fontSize: 13,
    fontWeight: '600',
  }),
  textInputBox: (textInputBorderWith, isDarkMode) => ({
    backgroundColor: isDarkMode ? '#58002C' : '#F8E9C9',
    padding: 10,
    borderBottomWidth: textInputBorderWith,
    borderRightWidth: textInputBorderWith,
    borderRadius: 5,
    borderColor: '#C28F21',
    opacity: 50,
  }),
});

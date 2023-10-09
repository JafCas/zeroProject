import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../interface/colors/mainColors';

export const FirstTextInput = ({valueName, placeHolderName}) => {
  const [textInputBorderWith, setTextInputBorderWith] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.textInputNameContainer}>
        <Text style={styles.textInputName}>{placeHolderName}</Text>
      </View>
      <TextInput
        placeholder={valueName}
        style={styles.textInputBox(textInputBorderWith)}
        onFocus={() => {
          setTextInputBorderWith(2);
        }}
        onEndEditing={() => {
          setTextInputBorderWith(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  textInputNameContainer: {
    marginLeft: 10,
  },
  textInputName: {
    color: Colors.plum,
    fontSize: 13,
    fontWeight: '600',
  },
  textInputBox: textInputBorderWith => ({
    backgroundColor: '#F8E9C9',
    padding: 10,
    borderBottomWidth: textInputBorderWith,
    borderRightWidth: textInputBorderWith,
    borderRadius: 5,
    borderColor: '#C28F21',
    opacity: 50,
  }),
});

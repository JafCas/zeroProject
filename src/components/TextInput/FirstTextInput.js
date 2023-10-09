import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const Colors = {
  rose: '#F11A7B',
  plum: '#982176',
  jordyBlue: '#adc7ff',
  tyrianPurple: '#3E001F',
  peach: '#FFE5AD',
};

export const FirstTextInput = ({valueName, placeHolderName}) => {
  const [textInputBorderWith, setTextInputBorderWith] = useState(0);
  return (
    <View
      style={{
        marginBottom: 10,
      }}>
      <View style={{marginLeft: 10}}>
        <Text
          style={{
            color: Colors.plum,
            fontSize: 13,
            fontWeight: '600',
          }}>
          {placeHolderName}
        </Text>
      </View>
      <TextInput
        placeholder={valueName}
        style={{
          backgroundColor: '#F8E9C9',
          padding: 10,
          borderBottomWidth: textInputBorderWith,
          borderRightWidth: textInputBorderWith,
          borderRadius: 5,
          borderColor: '#C28F21',
          opacity: 50,
        }}
        onFocus={() => {
          setTextInputBorderWith(2);
        }}
        onEndEditing={() => {
          setTextInputBorderWith(0);
        }}
        // style={{borderColor: Colors.tyrianPurple, borderWidth: 0.1}}
      />
    </View>
  );
};

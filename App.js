import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {FirstTextInput} from './src/components/TextInput/FirstTextInput';

// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//   );
// };

const Colors = {
  rose: '#F11A7B',
  plum: '#982176',
  jordyBlue: '#adc7ff',
  tyrianPurple: '#3E001F',
  peach: '#FFE5AD',
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [textInputBorderWith, setTextInputBorderWith] = useState(0);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.jordyBlue : Colors.peach,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{flex: 1, justifyContent: 'center', padding: 25}}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            bottom: 42,
          }}>
          <Text style={{fontSize: 46}}>Hello there</Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, width: '100%'}}>
            <View
              style={{
                flex: 1,
              }}>
              <FirstTextInput valueName={'name'} placeHolderName={'Example'} />
              <FirstTextInput valueName={'name'} placeHolderName={'Example'} />
              {/* <FirstTextInput /> */}
            </View>
            <View style={{flex: 1}}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

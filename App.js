import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.jordyBlue : Colors.peach,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>Hello there</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

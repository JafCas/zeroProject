import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {FirstTextInput} from './src/components/TextInput/FirstTextInput';
import {Colors} from './src/interface/colors/mainColors';

const App = () => {
  const [buttonColor, setButtonColor] = useState(Colors.tyrianPurple);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.jordyBlue : Colors.peach,
    flex: 1,
  };

  const styles = StyleSheet.create({
    titleContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 25,
    },
    titleTextContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      marginBottom: 20,
    },
    titleText: {fontSize: 46},
    secondSectionContainer: {
      flex: 1,
    },
    textInputSection: {flex: 1, width: '100%', paddingVertical: 20},
    thirdSection: {flex: 1, paddingTop: 40},
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Hello there</Text>
        </View>
        <View style={styles.secondSectionContainer}>
          <View style={styles.textInputSection}>
            <FirstTextInput
              valueName={'First Value'}
              placeHolderName={'First Input'}
            />
            <FirstTextInput
              valueName={'Second Value'}
              placeHolderName={'Second Input'}
            />
          </View>
        </View>
        <View style={styles.thirdSection}>
          <Pressable
            style={{
              backgroundColor: buttonColor,
              marginHorizontal: 50,
              borderRadius: 10,
              padding: 10,
              alignItems: 'center',
              elevation: 3,
            }}
            onPressIn={() => {
              setButtonColor(Colors.rose);
              console.log('in');
            }}
            onPressOut={() => {
              setButtonColor(Colors.tyrianPurple);
              console.log('out');
            }}
            onPress={() => {
              console.log('first');
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>
              Button
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

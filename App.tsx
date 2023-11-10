// TODO: Solve this issue
import React, { createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './src/screens/signIn/SignIn';
import MainInfo from './src/screens/mainInfo/MainInfo';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

export const ThemeContext = createContext(false);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainInfo">
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            // options={{ title: 'Overview' }}
          />
          <Stack.Screen
            name="MainInfo"
            component={MainInfo}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;

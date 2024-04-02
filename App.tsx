import React from 'react';
import { useColorScheme } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from './src/screens/signIn/SignIn';
import MainInfo from './src/screens/mainInfo/MainInfo';
import { ThemeContext } from './src/context/ThemeContext';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/context/store';

enableScreens();

const Stack = createSharedElementStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <NavigationContainer>
        <ReduxProvider store={store}>
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
        </ReduxProvider>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;

import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './src/screens/signIn/SignIn';
import MainInfo from './src/screens/mainInfo/MainInfo';
import { ThemeContext } from './src/context/ThemeContext';
import { Provider } from 'react-redux';
import store from './src/app/store';
import { Counter } from './src/counter/Counter';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      {/* <ThemeContext.Provider value={isDarkMode}>
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
      </ThemeContext.Provider> */}
      <SafeAreaView>
        <Counter />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

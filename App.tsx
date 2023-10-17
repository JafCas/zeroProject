// TODO: Solve this issue
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './src/screens/signIn/SignIn';
import { Button, Text, View } from 'react-native';
import MainInfo from './src/screens/mainInfo/MainInfo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
  );
};

export default App;

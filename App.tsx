import React from 'react';
import { Text, useColorScheme, View } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from './src/screens/signIn/SignIn';
import MainInfo from './src/screens/mainInfo/MainInfo';
import { ThemeContext } from './src/context/ThemeContext';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './src/context/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

enableScreens();

const Stack = createSharedElementStackNavigator();

const Tab = createBottomTabNavigator();

const SecondStack = createSharedElementStackNavigator();

const SecondScreen = () => {
  return (
    <View>
      <Text>Second Screen</Text>
    </View>
  );
};

const SecondStackScreen = () => {
  return (
    <SecondStack.Navigator>
      <SecondStack.Screen name="second" component={SecondScreen} />
    </SecondStack.Navigator>
  );
};

const ThirdStack = createSharedElementStackNavigator();

const ThirdScreen = () => {
  return (
    <View>
      <Text>Third Screen</Text>
    </View>
  );
};

const ThirdStackScreen = () => {
  return (
    <ThirdStack.Navigator>
      <ThirdStack.Screen name="third" component={ThirdScreen} />
    </ThirdStack.Navigator>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <NavigationContainer>
        <ReduxProvider store={store}>
          {/* <Stack.Screen
              name="SignIn"
              component={SignIn}
              // options={{ title: 'Overview' }}
            /> */}
          {/* TODO: Convert Tab Navigator into StackComponent and sorround it with StackNavigator.  */}
          {/* This will allow us to moderate workflow for both session and non-session users. */}
          <Tab.Navigator initialRouteName="MainInfo">
            <Tab.Screen
              name="MainInfo"
              component={MainInfo}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Second"
              component={SecondStackScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Third"
              component={ThirdStackScreen}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        </ReduxProvider>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;

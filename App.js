/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from '@react-navigation/native';
import SignUp from './screens/SignUp';
import {Text} from 'react-native';
import Splash from './screens/Splash';

const Stack = createStackNavigator();

const App = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
          headerShown: false,
          // headerTitleAlign: 'center',
          // headerLeft: () => {
          //   return <Text style={{color: 'black'}}>Left</Text>;
          // },
          // headerRight: () => {
          //   return <Text style={{color: 'black'}}>Right</Text>;
          // },
          // headerRightContainerStyle: {paddingRight: 16},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

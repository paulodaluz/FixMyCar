import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator, DrawerA} from '@react-navigation/drawer'

import Login from './src/pages/Login'
import Home from './src/pages/Home'

/* Wannings Ignorados */
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

function MenuSide({ navigation }) {
  const superior = navigation
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Login"
      hideStatusBar={false}
      drawerStyle={{
        backgroundColor: 'white',
        width: 240,
      }}
    >
      <Drawer.Screen name="Home" component={Home} initialParams={{superior}} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FixMyCar"
          component={MenuSide}
          options={{
            headerTitleAlign: "center"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

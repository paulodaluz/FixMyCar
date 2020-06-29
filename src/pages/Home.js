import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function MenuSide({ navigation }) {
    const superior = navigation
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator 
        hideStatusBar={false}
        drawerStyle={{
          backgroundColor: 'white',
          width: 240,
        }}
      >
        <Drawer.Screen name="Home"/>
        <Drawer.Screen name="Contato" />
      </Drawer.Navigator>
    )
  }

export default function Home() {
    const Stack = createStackNavigator();
    return (
        //<NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="App"
            component={MenuSide}
          />
        </Stack.Navigator>
      //</NavigationContainer>
    )
}

//const styles = StyleSheet.create({})

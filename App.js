import * as React from 'react';
import { StyleSheet, Button } from 'react-native'
import { decode, encode } from 'base-64'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerA } from '@react-navigation/drawer'

import Login from './src/pages/Login'
import Home from './src/pages/Home'
import Contatos from './src/pages/Contatos'
import Manutencoes from './src/pages/Manutencoes'
import Consumos from './src/pages/Consumos'
import Calconsumo from './src/pages/Calconsumo'
import MapaContatos from './src/pages/MapaContatos'

import Sobre from './src/pages/Sobre'
import Arquitetura from './src/pages/Arquitetura'
import Tecnologia from './src/pages/Tecnologia'
import Faq from './src/pages/Faq'

//Desabilitano Warnings
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Setting a timer'])

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

function MenuSide({ navigation }) {
  const superior = navigation
  const Drawer = createDrawerNavigator();
  return (    
    <Drawer.Navigator initialRouteName="Home"
      hideStatusBar={false}
      drawerStyle={{
        backgroundColor: 'white',
        width: 240,
      }}
    >      
      <Drawer.Screen name="Home" component={Home} initialParams={{ superior }} />
      <Drawer.Screen name="Contatos" component={Contatos} initialParams={{ superior }} />
      <Drawer.Screen name="Mapa Contatos" component={MapaContatos} />
      <Drawer.Screen name="Manutenções" component={Manutencoes} initialParams={{ superior }} />
      <Drawer.Screen name="Consumos" component={Consumos} initialParams={{ superior }} />
      <Drawer.Screen name="Sobre" component={Sobre} initialParams={{ superior }} />
      <Drawer.Screen name="FAQ" component={Faq} initialParams={{ superior }} />      
      <Drawer.Screen name="Arquitetura" component={Arquitetura} initialParams={{ superior }} />
      <Drawer.Screen name="Tecnologia" component={Tecnologia} initialParams={{ superior }} />      
      <Drawer.Screen name="Logoff" component={Login} initialParams={{ superior, funcao: 'logout' }} />
    </Drawer.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">              
        <Stack.Screen name="MenuSide"
          component={MenuSide}
          options={{
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen name="Contatos"
          component={Contatos}
        />
        <Stack.Screen name="Calconsumo"
          component={Calconsumo}
        />

        <Stack.Screen name="Login"
          component={Login}
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

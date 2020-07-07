import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import Login from './Login';

export default function Home({ navigation, route }) {

  const superior = route.params.superior

  useLayoutEffect(() => {
    superior.setOptions({
      title: 'Home',
      headerLeft: () => (
        <Entypo
          name="menu"
          size={24}
          color="black"
          onPress={() => navigation.openDrawer()}
          style={{ marginLeft: 20 }}
        />
      ),
    });
  }, []);

  const cadContatos = () => {
    navigation.navigate('Contatos')
  }

  const cadMapcontatos = () => {
    navigation.navigate('Mapa Contatos')
  }

  const cadMatutencoes = () => {
    navigation.navigate('Manutenções')
  }

  const cadConsumo = () => {
    navigation.navigate('Consumos')
  }

  const logoff = () => {
    navigation.navigate('Logoff')
  }

  return (
    <View style={styles.container}>
        <View style={styles.botao}>
          <Button 
            title="Contatos"
            color="#5C5C5B"
            onPress={cadContatos}
          />
        </View>

        <View style={styles.botao}>
          <Button 
            title="Mapa de Contatos"
            color="#5C5C5B"
            onPress={cadMapcontatos}            
          />
        </View>

        <View style={styles.botao}>
          <Button 
            title="Manutenção"
            color="#5C5C5B"
            onPress={cadMatutencoes}
          />
        </View>

        <View style={styles.botao}>
          <Button 
            title="Consumo"
            color="#5C5C5B"
            onPress={cadConsumo}          
          />
        </View>

        <View style={styles.botao}>
          <Button 
            title="Logoff"
            color="#5C5C5B"
            onPress={logoff}          
          />
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B5B3B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    width: "80%",
    padding: 5,
    marginTop: 20
  }  
})

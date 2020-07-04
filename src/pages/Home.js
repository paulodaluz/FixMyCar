import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default function Home({ navigation, route }) {

  const superior = route.params.superior

  useLayoutEffect(() => {
    superior.setOptions({
      title: 'FixMyCar',
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

  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B7D39',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

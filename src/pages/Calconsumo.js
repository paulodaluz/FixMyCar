import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native'

export default function Calconsumo(props) {
    const {navigation} = props
    const {route} = props
    const {resultado, classific, km} = route.params
    
    return (
        <ImageBackground 
            source={require('./tabconsumo.png')} 
            style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <Text style={styles.texto}>Média {resultado} KM/Lts. </Text>                
                <Text style={{
                        fontSize:25,
                        fontWeight:'bold',
                        marginTop:10,
                }}>Consumo {classific}</Text>
                
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },    
    texto: {
        //width: "28%",
        //padding: 5,
        fontSize: 40,
        marginTop: 100,        
    },
    botao: {
        marginTop: 50,
        width: "50%"
    }
})
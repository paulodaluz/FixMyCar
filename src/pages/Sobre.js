import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const { expo } = require('../../app.json');

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text>Nome: {expo.name}</Text>
            <Text>Vesão: 1.0</Text>
            <Text>App criado utilizando expo CLI</Text>
            <View style={styles.bloco}>
                <Text style={styles.titulo}>Por que utilizamos expo CLI?</Text>
                <Text style={styles.texto}>Foi utilizado expo CLI, pela simplicidade de configuração e da facilidade de desenvolvimento em diferentes sistemas.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3CB371',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bloco: {
        marginTop: "10%",
    },
    titulo: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        maxWidth: '70%'
    }
})

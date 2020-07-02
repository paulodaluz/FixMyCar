import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const { version } = require('../../package.json');
const { expo } = require('../../app.json');

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>App criado utilizando expo CLI</Text>
            <Text>Nome: {expo.name}</Text>
            <Text>Vesão: {version}</Text>
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

import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Login() {
    return (
        <View style={styles.container}>
            <Text>FixMyCar</Text>
            <TextInput style={styles.caixaTexto}
                placeholder = 'e-mail'
            />
            <TextInput style={styles.caixaTexto}
                placeholder = 'password'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent: 'center'
    },
    caixaTexto: {
        width: "80%",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#032EDC',
        padding: 5,
        marginTop: 10,
        marginBottom: 10
    },

})

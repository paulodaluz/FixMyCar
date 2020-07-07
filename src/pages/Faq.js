import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
const { expo } = require('../../app.json');
import { Entypo } from '@expo/vector-icons'

export default function Faq(props) {

    const { navigation } = props

    const superior = props.route.params.superior
    useLayoutEffect(() => {
        superior.setOptions({
            title: 'FAQ',
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
            <Text>Nome: {expo.name}</Text>
            <Text>Vesão: 1.0</Text>
            <Text style={styles.titulo}>Funcionalidades do aplicativo</Text>
            <View style={styles.bloco}>
                <Text style={styles.texto}>O objetivo do aplicativo é armazenar informações referente a manutenções 
                                           de veículos, concumo/média de combustível. Também o cadastros de contatos como,
                                           oficinas mecânicas, auto peças, auto eléticas, enfim todo e qualquer serviço
                                           relacionado a manutenção de veículos. O aplicativo conta com a funcionalidade 
                                           para visualização dos contatos no Google Maps.</Text>
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

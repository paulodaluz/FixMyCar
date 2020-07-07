import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
const { expo } = require('../../app.json');
import { Entypo } from '@expo/vector-icons'

export default function Arquitetura(props) {

    const { navigation } = props

    const superior = props.route.params.superior
    useLayoutEffect(() => {
        superior.setOptions({
            title: 'Arquitetura',
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
            <View style={styles.bloco}>
                <Text style={styles.texto}>-> back_end </Text>
                <Text style={styles.texto}>  -> firebase.js :(funções par conexão com o bacl end de sustentação)</Text>
                <Text style={styles.texto}>-> pages </Text>
                <Text style={styles.texto}>  -> Arquitetura.js :(arquitetura/disposição dos arquivos do projeto) </Text>
                <Text style={styles.texto}>  -> Consumo.js :(tela(CRUD) para cadastro das informações necessárias para o armazenamento 
                                                            das informações para cálculo da média de consumo de combustível) </Text>
                <Text style={styles.texto}>  -> Calconsumo.js :(tela para visualização/métrica de consumo) </Text>
                <Text style={styles.texto}>  -> Contatos.js :(tela(CRUD) para cadastro de contatos (Ex:Empresas e pessoass) ) </Text>
                <Text style={styles.texto}>  -> Faq.js :(tela com informações do objetivo do aplicativo) </Text>
                <Text style={styles.texto}>  -> Home.js :(tela principal + botões de acesso as funcionalidades) </Text>
                <Text style={styles.texto}>  -> Login.js :(Controle de acesso ao aplicativo, registro/cadastro de 
                                             novos acessos e armazenamento em memória de acessos "Manter conectado") </Text>
                <Text style={styles.texto}>  -> Manutencao.js :(tela(CRUD) par cadastro das manutençõe realizadas no veículo) </Text>
                <Text style={styles.texto}>  -> MapaContatos.js :(tela de para identificação geográfica (Google Maps) dos contatos cadastrados) </Text>                
                <Text style={styles.texto}>  -> Sobre.js :(tela com informação dos desenvolvedores) </Text>                
                <Text style={styles.texto}>-> services </Text>
                <Text style={styles.texto}>  -> asyncStorage.js :() </Text>
                <Text style={styles.texto}>  -> authService.js :() </Text>
                <Text style={styles.texto}>  -> consumoService.js :() </Text>
                <Text style={styles.texto}>  -> contatoService.js :() </Text>
                <Text style={styles.texto}>  -> manutencoesService.js :() </Text>

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
        maxWidth: '95%'
    }
})

import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
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
                <FlatList
                    data={[
                        {key: '-> back_end'},
                        {key:'  -> firebase.js :(funções par conexão com o back end de sustentação)'},
                        {key:'-> pages'},
                        {key:'  -> Arquitetura.js :(arquitetura/disposição dos arquivos do projeto)'},
                        {key:'  -> Consumo.js :(tela(CRUD) cadastro das informações necessárias para o armazenamento das informações para cálculo da média de consumo de combustível)'},
                        {key:'  -> Calconsumo.js :(tela para visualização/métrica de consumo)'},
                        {key:'  -> Contatos.js :(tela(CRUD) para cadastro de contatos (Ex:Empresas e pessoass))'},
                        {key:'  -> Faq.js :(tela com informações do objetivo do aplicativo) '},
                        {key:'  -> Home.js :(tela principal + botões de acesso as funcionalidades)'},
                        {key:'  -> Login.js :(Controle de acesso ao aplicativo, registro/cadastro de novos acessos e armazenamento em memória de acessos "Manter conectado")'},
                        {key:'  -> Manutencao.js :(tela(CRUD) par cadastro das manutençõe realizadas no veículo)'},
                        {key:'  -> MapaContatos.js :(tela de para identificação geográfica (Google Maps) dos contatos cadastrados)'},
                        {key:'  -> Sobre.js :(tela com informação dos desenvolvedores)'},
                        {key:'-> services'},
                        {key:'  -> asyncStorage.js :()'},
                        {key:'  -> authService.js :()'},
                        {key:'  -> consumoService.js :()'},
                        {key:'  -> contatoService.js :()'},
                        {key:'  -> manutencoesService.js :()'}
                    ]}
                    renderItem={
                    ({item}) => <Text style={styles.texto}>{item.key}</Text>
                    }
                />

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

import React, { useState, useEffect, useLayoutEffect } from 'react'
import { ActivityIndicator, StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import * as manutencaoService from '../service/manutencoesService'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Entypo } from '@expo/vector-icons'

export default function Manutencoes(props) {

    const { navigation } = props
    const [loading, setLoaging] = useState(false);
    const [key, setKey] = useState("");
    const [manutencoes, setManutencoes] = useState([]);

    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState("");
    const [detalhamento, setDetalhamento] = useState("");
    const [valor, setValor] = useState("");
    const [mensagem, setMensagem] = useState("");

    const clearImputs = () => {
        setValor('')
        setDetalhamento('')
        setData('')
        setDescricao('')
        setMensagem('')
        getManutencoes()
    }

    const superior = props.route.params.superior

    useLayoutEffect(() => {
        superior.setOptions({
            title: 'Manutenções',
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

    const saveManutencao = () => {
        setLoaging(true)
        if (!data || !descricao || !detalhamento || !valor) {
            setMensagem("Campos Inválidos")
        } else {
            const manutencao = {
                descricao: descricao,
                data: data,
                detalhamento: detalhamento,
                valor: valor
            }
            manutencaoService.salvarManutencao(manutencao, key)
                .then(res => {
                    setMensagem("Dados Inseridos com Sucesso!")
                    clearImputs()
                })
                .catch(erro => setMensagem(erro))
        }
    }

    const deleteManutencao = (manutencao) => {
        setLoaging(true)
        manutencaoService.deletarManutencao(manutencao)
            .then(() => getManutencoes())
            .catch(erro => setMensagem(erro))
        clearImputs()
    }

    const getManutencoes = () => {
        setLoaging(true)
        manutencaoService.pegarManutencao()
            .then(retorno => {
                setManutencoes(retorno)
                setLoaging(false)
            })
            .catch(erro => setMensagem(erro))
    }

    const back = () => {
        navigation.navigate('Home')
    }

    useEffect(() => {
        getManutencoes();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <TextInput style={descricao ? styles.caixaTexto : styles.caixaTextoError}
                    placeholder='Descrição'
                    value={descricao}
                    onChangeText={texto => setDescricao(texto)}
                />
                <TextInput style={data ? styles.caixaTexto : styles.caixaTextoError}
                    placeholder='Data'
                    value={data}
                    onChangeText={texto => setData(texto)}
                />
                <TextInput style={detalhamento ? styles.caixaTexto : styles.caixaTextoError}
                    placeholder='Detalhamento'
                    value={detalhamento}
                    onChangeText={texto => setDetalhamento(texto)}
                />
                <TextInput style={valor ? styles.caixaTexto : styles.caixaTextoError}
                    placeholder='Valor em R$'
                    value={valor}
                    keyboardType='numeric'
                    onChangeText={texto => setValor(texto)}
                />
                <Text style={styles.mensagemErro}>{mensagem}</Text>
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Salvar"
                        color="#8B7D39"
                        onPress={() => { saveManutencao() }}
                    />
                </View>
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Limpar"
                        color="#8B7D39"
                        onPress={clearImputs}
                    />
                </View>
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Voltar"
                        color="#8B7D39"
                        onPress={back}
                    />
                </View>
            </View>

            <View style={styles.box3}>
                <ActivityIndicator animating={loading} size="small" color="#F3FF00" />
                <FlatList
                    data={manutencoes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                setDescricao(item.descricao)
                                setData(item.data)
                                setDetalhamento(item.detalhamento)
                                setValor(item.valor)
                                setKey(item.key)
                            }}
                        >
                            <View style={styles.getbox}>
                                <View style={styles.collum}>
                                    <Text>{item.data} - {item.descricao}</Text>
                                    <Text>{item.detalhamento}</Text>
                                    <Text>R$ {item.valor}</Text>
                                </View>
                                <View>
                                    <Text>
                                        <Icon
                                            onPress={() => deleteManutencao(item)}
                                            name="trash"
                                            size={40} color="red" />
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8B7D39',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    box1: {
        width: "95%",
        height: 175,
        margin: 5,
        alignItems: 'center'
    },
    box2: {
        flex: 1,
        width: 50,
        height: 40,
        margin: 5,
        alignItems: 'center'
    },
    box3: {
        width: "95%",
        height: 230,
        marginTop: 5
    },
    caixaTexto: {
        width: "95%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#fff",
        padding: 5,
        marginTop: 5
    },
    caixaTextoError: {
        width: "95%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#FF0017",
        padding: 5,
        marginTop: 5
    },
    botao: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: "80%",
        padding: 5,
        marginTop: 5
    },
    getbox: {
        flexDirection: 'row',
        padding: 5,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff'
    },
    collum: {
        width: "90%"
    },
    iconbox: {
        width: "20%"
    }
})
//<Text style={styles.boxTitle}>{item.name}</Text>
//<View style={styles.boxCollumAction}></View>
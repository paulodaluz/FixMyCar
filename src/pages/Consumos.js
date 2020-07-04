import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import { salvarConsumo, pegarConsumo, deletarConsumo } from '../service/consumosService';

export default function Consumos() {
    const [dataAbastecimento, setDataAbastecimento] = useState("");
    const [km, setKm] = useState("");
    const [kmPercorrido, setKmPercorrido] = useState("");
    const [litros, setLitros] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [consumos, setConsumos] = useState([]);

    const criarConsumo = async () => {
        clearImputs()
        if (!dataAbastecimento || !km || !kmPercorrido || !litros) {
            setMensagem("Campos Inválidos");
        } else {
            const consumo = {
                dataAbastecimento,
                km,
                kmPercorrido,
                litros
            };

            await salvarConsumo(consumo, '')
                .then((res) => {
                    setMensagem("Dados Inseridos com Sucesso!");
                })
                .catch((err) => {
                    setMensagem(err);
                });

            await pegarConsumo()
                .then((res) => {
                    setConsumos(res);
                })
                .catch((err) => {
                    setMensagem(err);
                });
        }
    }

    const getConsumos = async () => {
        await pegarConsumo()
            .then((retorno) => {
                setConsumos(retorno);
            })
            .catch((erro) => console.log(erro));
    };

    const deleteConsumo = async (consumo) => {
        await deletarConsumo(consumo)
    }

    const clearImputs = () => {
        setDataAbastecimento('')
        setKm('')
        setKmPercorrido('')
        setLitros('')
        setMensagem('')
    }

    useEffect(() => {
        getConsumos();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <TextInput style={styles.caixaTexto}
                    placeholder='Data de Abastecimento'
                    value={dataAbastecimento}
                    onChangeText={texto => setDataAbastecimento(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='KM'
                    keyboardType='numeric'
                    value={km}
                    onChangeText={texto => setKm(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='KMs Percorrido'
                    keyboardType='numeric'
                    value={kmPercorrido}
                    onChangeText={texto => setKmPercorrido(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='Litros de Gasolina'
                    value={litros}
                    keyboardType='numeric'
                    onChangeText={texto => setLitros(texto)}
                />
                <Text style={styles.mensagemErro}>{mensagem}</Text>
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Salvar"
                        color="#fff"
                        onPress={() => {
                            criarConsumo()
                            clearImputs()
                            getConsumos()
                        }}
                    />
                </View>
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Limpar"
                        color="#fff"
                        onPress={clearImputs}
                    />
                </View>
            </View>
            <View>
                <FlatList
                    data={consumos}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                deleteConsumo(item)
                                getConsumos()
                            }}
                        >
                            <View style={styles.box}>
                                <View style={styles.boxCollum}>
                                    <Text>Data de Abastecimento: {item.dataAbastecimento}</Text>
                                    <Text>KM: {item.km}</Text>
                                    <Text>KMs Percorridos: {item.kmPercorrido}</Text>
                                    <Text>Litros: {item.litros}</Text>
                                </View>
                                <View style={styles.boxCollumAction}></View>
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
        height: 180,
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
        height: 280,
        marginTop: 5
    },
    caixaTexto: {
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#fff',
        //backgroundColor: '#fff',
        padding: 5,
        marginTop: 5,
        //marginBottom: 5
    },
    botao: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        width: "80%",
        padding: 5,
        marginTop: 5,
        paddingTop: 0
    },
    mensagemErro: {
        marginTop: 10,
        color: "red",
    },
    box: {
        backgroundColor: '#fff',
        flexDirection: "row",
        width: "95%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        padding: 10,
        marginTop: 10,
    },
    boxCollum: {
        width: "80%",
    },
    boxCollumAction: {
        width: "20%",
    },
    boxTitle: {
        fontWeight: "bold",
        color: "blue",
    },
})

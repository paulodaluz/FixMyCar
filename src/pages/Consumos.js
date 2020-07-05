import React, { useState, useEffect } from 'react'
import {ActivityIndicator, StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import { salvarConsumo, pegarConsumo, deletarConsumo } from '../service/consumosService';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Consumos() {
    const [loading, setLoaging] = useState(false)
    const [key, setKey] = useState("")
    const [contacts, setContacts] = useState([])    

    const [dataAbastecimento, setDataAbastecimento] = useState("");
    const [km, setKm] = useState("");
    const [kmPercorrido, setKmPercorrido] = useState("");
    const [litros, setLitros] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [consumos, setConsumos] = useState([]);

    const clearImputs = () => {
        setDataAbastecimento('')
        setKm('')
        setKmPercorrido('')
        setLitros('')
        setMensagem('')
    }

    const criarConsumo = async () => {
        setLoaging(true)
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
                    clearImputs()
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

    useEffect(() => {
        getConsumos();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <TextInput style={dataAbastecimento ? styles.caixaTexto : styles.caixaTextoError}
                    placeholder='Data de Abastecimento'
                    value={dataAbastecimento}
                    onChangeText={texto => setDataAbastecimento(texto)}
                />
                <TextInput style={km ? styles.caixaTexto : styles.caixaTextoError}
                    placeholder='KM'
                    keyboardType='numeric'
                    value={km}
                    onChangeText={texto => setKm(texto)}
                />
                <TextInput style={kmPercorrido ? styles.caixaTexto : styles.caixaTextoError}
                    placeholder='KMs Percorrido'
                    keyboardType='numeric'
                    value={kmPercorrido}
                    onChangeText={texto => setKmPercorrido(texto)}
                />
                <TextInput style={litros ? styles.caixaTexto : styles.caixaTextoError}
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
                        color="#8B7D39"
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
                        color="#8B7D39"
                        onPress={clearImputs}
                    />
                </View>
            </View>
            <View style={styles.box3}>
                <ActivityIndicator animating={loading} size="small" color="#F3FF00"/>
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
        height: 280,
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
        borderColor: '#fff',
    },
    collum: {
        width: "90%"
    },
    iconbox: {
        width: "20%"
    }
})

//<ActivityIndicator animating={loading} size="small" color="#F3FF00"/>
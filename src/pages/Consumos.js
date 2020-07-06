import React, { useState, useEffect, useLayoutEffect } from 'react'
import { ActivityIndicator, StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import * as consumoService from '../service/consumosService'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Entypo } from '@expo/vector-icons'

export default function Consumos(props) {

    const { navigation } = props
    const [loading, setLoaging] = useState(false);
    const [key, setKey] = useState("");
    const [consumo, setConsumo] = useState([]);

    const [dataAbastecimento, setDataAbastecimento] = useState("");
    const [km, setKm] = useState("");
    const [kmPercorrido, setKmPercorrido] = useState("");
    const [litros, setLitros] = useState("");
    const [media, setMedia] = useState();
    const [mensagem, setMensagem] = useState("");

    const clearImputs = () => {
        setDataAbastecimento("")
        setKm("")
        setKmPercorrido("")
        setLitros("")
        setMedia("")
        setLoaging(false)
        getConsumo()
    }

    const superior = props.route.params.superior

    useLayoutEffect(() => {
        superior.setOptions({
            title: 'Consumos',
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

    const saveConsumo = () => {
        setLoaging(true)
        if (!dataAbastecimento || !km || !kmPercorrido || !litros) {
            setMensagem("Campos Inválidos")
        } else {
            const consumo = {
                dataAbastecimento: dataAbastecimento,
                km: km,
                kmPercorrido: kmPercorrido,
                litros: litros,
                media: media
            }
            consumoService.salvarConsumo(consumo, key)
                .then(res => {
                    setMensagem("Dados Inseridos com Sucesso!")
                    clearImputs()
                })
                .catch(erro => setMensagem(erro))
        }
    }

    const deleteConsumo = (consumo) => {
        setLoaging(true)
        consumoService.deletarConsumo(consumo)
            .then(() => getConsumo())
            .catch(erro => setMensagem(erro))
        clearImputs()
    }

    const getConsumo = () => {
        setLoaging(true)
        consumoService.pegarConsumo()
            .then(retorno => {
                setConsumo(retorno)
                setLoaging(false)
            })
            .catch(erro => setMensagem(erro))
    }

    const back = () => {
        navigation.navigate('Home')
    }

    const calcConsumo = () => {

        var resultado = Math.trunc(kmPercorrido / litros)

        if (resultado > 12) {
            classific = "A"
        } else
            if (resultado > 10 & resultado <= 12) {
                classific = "B"
            } else
                if (resultado > 8 & resultado <= 10) {
                    classific = "C"
                } else
                    if (resultado > 4 & resultado <= 8) {
                        classific = "D"
                    } else
                        if (resultado >= 0 & resultado <= 4) {
                            classific = "E"
                        } else {
                            classific = "Sem Classifcação",
                                resultado = "0"
                        }
        setMedia(resultado)
        //navigation.navigate("Calconsumo",{resultado, classific})
    }

    useEffect(() => {
        getConsumo()
    }, [])

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
                    value={km}
                    onChangeText={texto => setKm(texto)}
                />
                <TextInput style={kmPercorrido ? styles.caixaTexto : styles.caixaTextoError}
                    placeholder='KM Percorrido'
                    value={kmPercorrido}
                    onChangeText={texto => setKmPercorrido(texto)}
                />
                <TextInput style={litros ? styles.caixaTexto : styles.caixaTextoError}
                    placeholder='Litros'
                    value={litros}
                    onChangeText={texto => setLitros(texto)}
                />
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Salvar"
                        color="#8B7D39"
                        //onPress={calcConsumo,saveConsumo}
                        onPress={() => {
                            calcConsumo()
                            saveConsumo()
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
                    data={consumo}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                setDataAbastecimento(item.dataAbastecimento)
                                setKm(item.km)
                                setKmPercorrido(item.kmPercorrido)
                                setLitros(item.litros)
                                setMedia(item.media)
                                setKey(item.key)
                            }}
                        >
                            <View style={styles.getbox}>
                                <View style={styles.collum}>
                                    <Text>Dt.Abastecimento: {item.dataAbastecimento}</Text>
                                    <Text>Odometro: {item.km}</Text>
                                    <Text>Km Percorrido: {item.kmPercorrido} - Litros: {item.litros}</Text>
                                    <Text>Média: {item.media}</Text>
                                </View>
                                <View>
                                    <Text>
                                        <Icon
                                            onPress={() => deleteConsumo(item)}
                                            name="trash"
                                            size={40} color="red" />
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    }
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
        height: 215,
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
        borderColor: '#fff',
        padding: 5,
        marginTop: 5,
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
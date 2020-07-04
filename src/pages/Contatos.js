import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function Contatos() {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <TextInput style={styles.caixaTexto}
                    placeholder='Nome'
                //value={nome}
                //onChangeText={texto => setNome(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='Telefone'
                //value={nome}
                //onChangeText={texto => setNome(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='e-mail'
                //value={nome}
                //onChangeText={texto => setNome(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='Endereço'
                //value={nome}
                //onChangeText={texto => setNome(texto)}
                />
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Salvar"
                        color="#8B7D39"
                    //onPress={pesquisaLatLong(endereco), saveFriend}
                    />
                </View>
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Limpar"
                        color="#8B7D39"
                    //onPress={clearImputs}
                    />
                </View>
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
        marginTop: 5
    }
})

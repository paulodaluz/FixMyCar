import React, {useState} from 'react'
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native'


export default function Manutencoes() {
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState("");
    const [detalhamento, setDetalhamento] = useState("");
    const [valor, setValor] = useState("");
    
    const criarManutencao = () => {
        

    }

    const clearImputs = () => {
        setValor('')
        setDetalhamento('')
        setData('')
        setDescricao('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <TextInput style={styles.caixaTexto}
                    placeholder='Descrição'
                    value={descricao}
                    onChangeText={texto => setDescricao(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='Data'
                    value={data}
                    onChangeText={texto => setData(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='Detalhamento'
                    value={detalhamento}
                    onChangeText={texto => setDetalhamento(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='Valor em R$'
                    value={valor}
                    keyboardType='numeric'
                    onChangeText={texto => setValor(texto)}
                />
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Salvar"
                        color="#fff"
                        onPress={criarManutencao}
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
    }
})

import React, {useState, useEffect, useLayoutEffect} from 'react'
import { ActivityIndicator, StyleSheet, View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native'
import * as contatosService from '../service/contatosService'
import * as Location from 'expo-location'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Contatos(props) {

    const { navigation } = props
    const [loading, setLoaging] = useState(false);
    const [key, setKey] = useState("");
    const [contacts, setContacts] = useState([]);

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");    
    const [tipo, setTipo] = useState("");
    const [longitude,setLongitude] = useState("");
    const [latitude, setLatitude] = useState('');
    const [mensagem, setMensagem] = useState('');

    const clearImputs = () => {
        setNome("")
        setTelefone("")
        setEmail("")
        setEndereco("")
        setTipo("")        
        setLongitude("")
        setLatitude("")
        setLoaging(false)
        getContacts()
    }

    const saveContact = () => {        
        setLoaging(true)
        //Testando se os campos estão preenchidos
        if (!nome || !telefone || !email || !endereco || !tipo) {
            setMensagem("Campos Inválidos")
        } else { 
            const contato = {
                nome: nome,
                telefone: telefone,
                email: email,
                endereco: endereco,
                tipo: tipo,
                latitude: latitude,
                longitude: longitude,
            }
            //Invocando a função para salvar o amigo
            contatosService.salvarContato(contato, key)                
                .then(res => {
                    setMensagem("Dados Inseridos com Sucesso!")
                    //Após salvar limpa campos/variáveis
                    clearImputs()
                })
                .catch(erro => setMensagem(erro))
        }
    }

    const deleteContacts = (contato) => {
        setLoaging(true)
        contatosService.deletarContato(contato)
            .then(() => getContacts())
            .catch(erro => setMensagem(erro))
        clearImputs()
    }

    const getContacts = () => {
        setLoaging(true)
        contatosService.pegarContatos()
            .then(retorno => {
                setContacts(retorno)
                setLoaging(false)
            })
            .catch(erro => setMensagem(erro))
    }

    const pesquisaLatLong = async (local) => {
        let posicao = await Location.geocodeAsync(local)
          .then(resultado => {
            setLatitude(resultado[0].latitude)            
            setLongitude(resultado[0].longitude)
          })
          .catch(erro => console.log(erro))              
    }     

    const back = () => {
        navigation.navigate('Home')
    }
    
    useEffect(() => {
        clearImputs()
        //getContacts()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <TextInput style={nome ? styles.caixaTexto : styles.caixaTextoError}
                        placeholder='Nome'
                        value={nome}
                        onChangeText={texto => setNome(texto)}
                />                
                <TextInput style={telefone ? styles.caixaTexto : styles.caixaTextoError}
                        placeholder='Telefone'
                        value={telefone}
                        onChangeText={texto => setTelefone(texto)}
                />
                <TextInput style={email ? styles.caixaTexto : styles.caixaTextoError}
                        placeholder='e-mail'
                        value={email}
                        onChangeText={texto => setEmail(texto)}
                />
                <TextInput style={endereco ? styles.caixaTexto : styles.caixaTextoError}
                        placeholder='Endereço'
                        value={endereco}
                        onChangeText={texto => setEndereco(texto)}
                />
                <TextInput style={tipo ? styles.caixaTexto : styles.caixaTextoError}
                        placeholder='Tipo'
                        value={tipo}
                        onChangeText={texto => setTipo(texto)}
                />                
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Salvar"
                        color= "#8B7D39"
                        onPress={pesquisaLatLong(endereco), saveContact}
                    />
                </View>
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Limpar"
                        color= "#8B7D39"
                        onPress={clearImputs}
                    />
                </View>
            </View>
            <View style={styles.box2}>
                <View style={styles.botao}>
                    <Button
                        title="Voltar"
                        color= "#8B7D39"
                        onPress={back}
                    />
                </View>
            </View>            
            <View style={styles.box3}>
                <ActivityIndicator animating={loading} size="small" color="#F3FF00" />
                <FlatList
                    data={contacts}
                    renderItem={({ item }) =>
                        <TouchableOpacity
                            onPress={() => {
                                setNome(item.nome)
                                setTelefone(item.telefone)
                                setEmail(item.email)
                                setEndereco(item.endereco)
                                setTipo(item.tipo)
                                setKey(item.key)
                            }}
                        >
                            <View style={styles.getbox}>
                                <View style={styles.collum}>
                                    <Text>{item.tipo} - {item.nome}</Text>
                                    <Text>{item.email} - {item.telefone}</Text>
                                    <Text>{item.endereco}</Text>
                                </View>
                                <View>
                                    <Text>
                                        <Icon
                                            onPress={() => deleteContacts(item)}
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
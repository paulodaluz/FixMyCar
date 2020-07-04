import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, TextInput, View, ImageBackground, Button } from 'react-native'
import * as authService from '../service/authService'

export default function Login(props) {

    const [mensagem, setMensagem] = useState("")
    const [email, setEmail] = useState()
    const [password, setPasswrd] = useState()
    const [loading, setLoaging] = useState(false)
    const { navigation } = props
    const { route } = props
    const superior = route.params ? route.params.superior : ""


    const registrarLogin = () => {
        setLoaging(true)
        authService.register(email, password)
            .then(retorno => {
                setMensagem("Registro efetuado com Sucesso !!!")
                setPasswrd()
                setLoaging(false)
            })
            .catch(erro => {
                setMensagem("Erro ao registrar novo Login !!!")
                setLoaging(false)
            })

    }

    const validarLogin = () => {
        setLoaging(true)
        authService.login(email, password)
            .then(retorno => {
                navigation.navigate('MenuSide')
                setEmail()
                setPasswrd()
                setMensagem()
                setLoaging(false)
            })
            .catch(erro => {
                //setMensagem(erro.message)
                setMensagem("e-mail ou senha incorreto !!!")
                setLoaging(false)
            })

    }

    useEffect(() => {
        if (route.params) {
            if (route.params.funcao == "logout") {
                superior.goBack()
            }
        }
    }, [route.params])

    return (
        <ImageBackground
            source={require('./login.png')}
            style={{
                width: '100%',
                height: '100%'
            }}
        >
            <View style={styles.container}>
                <Text style={styles.texto}>{mensagem}</Text>
                <TextInput style={styles.caixaTexto}
                    placeholder='e-mail'
                    value={email}
                    onChangeText={texto => setEmail(texto)}
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='password'
                    value={password}
                    onChangeText={texto => setPasswrd(texto)}
                    secureTextEntry
                />
                <ActivityIndicator animating={loading} size="small" color="#F3FF00" />
                <View style={styles.botao}>
                    <Button
                        title="Login"
                        color="#8B7D39"
                        onPress={validarLogin}
                    />
                </View>
                <View style={styles.botao}>
                    <Button
                        title="Register"
                        color="#8B7D39"
                        onPress={registrarLogin}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        marginTop: 15,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    caixaTexto: {
        width: "80%",
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#8B7D39',
        backgroundColor: '#fff',
        padding: 5,
        marginTop: 5,
        marginBottom: 5
    },
    botao: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8B7D39',
        width: "80%",
        padding: 5,
        marginTop: 5
    }
})

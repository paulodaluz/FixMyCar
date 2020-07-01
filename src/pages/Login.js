import React, {useEffect} from 'react'
import { StyleSheet, Text, TextInput, View, ImageBackground, Button } from 'react-native'

export default function Login(props) {
    const {navigation} = props
    const {route} = props
    const superior =  route.params ? route.params.superior : ""

    const validarLogin = () =>{
        navigation.navigate('MenuSide')
    }

    useEffect(() => {
        if (route.params){
            if (route.params.funcao=="logout"){
                superior.goBack()
                //console.log(superior)
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
                <TextInput style={styles.caixaTexto}
                    placeholder='e-mail'
                />
                <TextInput style={styles.caixaTexto}
                    placeholder='password'
                    secureTextEntry                    
                />
                <View style={styles.botao}>
                    <Button  
                        title= "Login"
                        color= "#8B7D39"
                        onPress= {validarLogin}
                    />
                </View>
                <View style={styles.botao}>
                    <Button  
                        title= "Register"
                        color= "#8B7D39"
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
        marginTop: 15 ,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize : 30
    },
    caixaTexto: {
        width: "80%",
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#8B7D39',
        backgroundColor: '#fff',
        padding: 5,
        marginTop: 10,
        marginBottom: 10
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

import React, { useState, useEffect } from 'react';
import {KeyboardAvoidingView, ScrollView, SafeAreaView,Alert, Platform, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import asyncStorage from '@react-native-community/async-storage';

import api from '../services/api';
import logo from '../assets/logo.png';

export default function Chamado() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto,  setAssunto] = useState('');
    const [descricao, setDescricao] = useState('');
    const cliente_id = 57979;
    const chamado_origem_id = 1;

    useEffect(()=>{
            asyncStorage.getItem('nome').then(nome=>{
                if(nome){
                    setNome(nome);
                }
            })
            asyncStorage.getItem('email').then(email=>{
                if(email){
                    setEmail(email);
                }
            })
        },[]);
    
    async function hadleChamado(){

        const autenticacao = 'sNYw9wsfzRyfktUx1HWw2Mwc4SwOfGv6HZPcJS7YYkA9oaqkwyf09bcdCScA95GGbyBVV9UaraFJFOxUEQ6hnb0aqfP7z41L3etud';
        if(nome != '' && email != '' && assunto != '' && descricao != ''){
            const response = await api.post('/chamados',{
                cliente_id,
                email_conferencia: email,
                nome_contato: nome,
                assunto,
                descricao,
                chamado_origem_id,
            },{ headers: { token: autenticacao } })
            .then(response => {
                    // If request is good...
                    console.log('Requisição Realizada com Sucesso' + response.data)
                    Alert.alert(
                        'Informação',
                        'Chamado Aberto Com Sucesso!',
                        [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false},
                    );
                })
                .catch((error) => {
                    console.log('Requisição Falhou' + error)
                    Alert.alert(
                        'Informação',
                        'Erro ao Abrir o Chamado!',
                        [
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false},
                    );
                });
            }else{
                Alert.alert(
                    'Informação',
                    'Preencha Todos os Campos Corretamente!',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    {cancelable: false},
                  );
            }
        
    }

    return(
        <ScrollView style={styles.scroll}>
        <SafeAreaView style={styles.safeArea} >
            <Image source={logo} />
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style={styles.keyboard}
        >
            <Text style={styles.titulo}>
                ABERTURA DE CHAMADO
            </Text>
            <TextInput 
                placeholder="Nome Do Solicitante" 
                placeholderTextColor="#999"
                style = {styles.input}
                value={nome}
                editable={false}
            />
            <TextInput 
                placeholder="Email" 
                placeholderTextColor="#999"
                style = {styles.input}
                value={email}
                editable={false}
            />
            <TextInput 
                placeholder="Assunto Do Chamado" 
                placeholderTextColor="#999"
                style = {styles.input}
                value={assunto}
                onChangeText={setAssunto}
            />
            <TextInput 
                multiline={true}
                numberOfLines={5}
                placeholder="Descrição Do Chamado" 
                placeholderTextColor="#999"
                style = {styles.inputArea}
                value={descricao}
                onChangeText={setDescricao}
            />
            <TouchableOpacity onPress={hadleChamado} style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 30,
    },
    scroll:{
        backgroundColor:'#f5f5f5',
    },
    titulo:{
        fontWeight:'bold',
        fontSize:25,
        marginTop:10,
        marginBottom:10,
        color: '#0077c3'
    },
    input:{
        height:46,
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius:4,
        marginTop:20,
        paddingHorizontal: 15,
        borderColor: '#0077c3'
    },
    inputArea:{
        height:110,
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius:4,
        marginTop:20,
        paddingHorizontal: 15,
        borderColor: '#0077c3'
    },
    button:{
        height:46,
        alignSelf:'stretch',
        backgroundColor:'#e7333c',
        borderRadius:4,
        marginTop: 20,
        paddingHorizontal: 15,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
        
    }
});
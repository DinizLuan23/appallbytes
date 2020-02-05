import React, {useState, useEffect} from 'react';
import asyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity, Image, ScrollView, KeyboardAvoidingView, Text, TextInput, StyleSheet} from 'react-native';

import logo from '../assets/logo.png';

export default function Login ({ navigation }){
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{
        asyncStorage.getItem('nome').then(nome=>{
            if(nome){
                navigation.navigate('Escolha', {nome});
            }
        })
    },[]);

    async function handleLogin(){

        await asyncStorage.setItem('nome', nome);
        for(let i = 0; i < email.length; i++){
            if(i == '@'){
                await asyncStorage.setItem('email', email);
                console.log('Email Correto');
            }
            else{
                console.log('Email Incorreto');
            }
        }

        navigation.navigate('Escolha');
    }

    return(
        <ScrollView>
        <KeyboardAvoidingView 
            behavior="padding"
            style={styles.safeArea}
            enabled={Platform.OS === 'ios'}
        >
                <Image source={logo} />
            <Text style={styles.titulo}>
                LOGIN
            </Text>
            <TextInput 
                placeholder="Nome" 
                placeholderTextColor="#999"
                style = {styles.input}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput 
                placeholder="Email" 
                placeholderTextColor="#999"
                style = {styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'white',
        padding: 30,
    },
    titulo:{
        fontWeight:'bold',
        fontSize:25,
        marginTop:70,
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
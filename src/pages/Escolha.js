import React from 'react';
import {View, Text,ScrollView, TouchableOpacity,Image, StyleSheet} from 'react-native';

import logo from '../assets/logo.png';

export default function Escolha({navigation}){

    function handleRapido(){
        navigation.navigate('ChamadoRapido');
    }
    function handleDetalhado(){
        navigation.navigate('Chamado');
    }

    return(
        <ScrollView style={styles.scroll}>
        <View style={styles.view}>
            <Image source={logo} />
            <Text style={styles.titulo}>
                TIPOS DE ABERTURA
            </Text>
            <TouchableOpacity onPress={handleRapido} style={styles.button}>
            <Text style={styles.buttonText}>RAPIDA</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleDetalhado} style={styles.button}>
            <Text style={styles.buttonText}>DETALHADA</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    view: {
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#f5f5f5',
        padding: 30,
    },
    button:{
        height:100,
        width: 200,
        alignSelf:'center',
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
        fontSize:20,
        
    },
    titulo:{
        fontWeight:'bold',
        fontSize:25,
        marginTop:50,
        marginBottom:10,
        color: '#0077c3'
    },
    scroll:{
        backgroundColor:'#f5f5f5',
    }
});
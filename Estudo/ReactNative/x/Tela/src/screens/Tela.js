import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import ListaMusicas from '../components/ListaMusicas/ListaMusicas';

const Tela = ()=> {
    const [text, setText] = useState('');

    const pegarTexto = (text) => {
        setText(text);
    }
    const [cars, setCars] = useState(['']);
      
    function User ({username}) {
        return (
            <Text style={styles.listaMusica}>{username}</Text>
        )
    }
    const instance = axios.create({
        baseURL:'https://pdm-cars-api.herokuapp.com/',
    })
    useEffect( ()=> {
        instance.get("cars").then((response)=> {
            console.log(response.data); 
            setCars(response.data);
        })
    }, []);
    
    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text>Informe o nome de um cantor</Text>
            </View>
            <View>
                <TextInput style={styles.input}
                    onChangeText={pegarTexto}
                    value={text}
                    placeholder="Pesquisar cantor"
                    placeholderTextColor='#d8ecfb'
                
                />
            </View>
            <View>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={styles.textPesquisar}>Pesquisar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.titulo2}>
                <Text>Lista de Músicas</Text>
            </View>
            <View style={styles.titulo3}>
                <Text >Quantidade: {cars.length}</Text>
            </View>
            <View>
            <FlatList 
                keyExtractor = {item => item.id}
                data={cars}
                renderItem={ (props) => < ListaMusicas username={props.item.model} />}
                
            />
            </View>
        </View>
        </ScrollView>
    )
}

export default Tela;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex:1,
        //alignItems:'center',
        //justifyContent: 'center',
        paddingHorizontal:40,

    },

    titulo:{
        marginTop:80,

    },
    titulo2:{
        marginTop:57,
    },
    titulo3:{
        marginTop:23,
        marginBottom:23,
    },

    input:{
        borderBottomWidth: 1,
        height:50,
        color: '#000',
    },
    touchableOpacity:{
        marginTop:77,
        marginHorizontal:29,
        backgroundColor: '#9b39cb',
        borderRadius:5,
        height:40,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    
    textPesquisar:{
        textAlign: 'center',
        color: 'white',
        paddingVertical:5,
    },
    listaMusica:{
        backgroundColor: '#e3bcf7',
        marginTop:5,
        paddingVertical:1,
        width: 230,
        paddingHorizontal:10,
        paddingVertical:10,
        
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        
    }
   
});
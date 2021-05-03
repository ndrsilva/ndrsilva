import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';

import ListaMusicas from '../components/ListaMusicas/ListaMusicas';

const Tela = ()=> {
    const [nomeMusica, setNomeMusica] = useState('');
    const [musica, setMusica] = useState('');
    const [dados, setDados] = useState(['']);

    const pegarTexto = (nomeMusica) => {
        setNomeMusica(nomeMusica);
    }
    const pesMusica = () => {
        setMusica(nomeMusica);
    }
      
    
    const instance = axios.create({
        baseURL:'https://itunes.apple.com/search?term=', 
    })

    useEffect( ()=> {
        instance.get(musica).then((response)=> {
            console.log(response.data.results); 
            setDados(response.data.results);
        })
    },[musica]);
    
    //ou
    /*
    const getMusica = async ()  => {
        try {
            const response = await axios.get('https://itunes.apple.com/search?term='+musica);
            console.log('Certo', response);
            setDados(response.data.results)

        } catch (error) {
            console.log('Erro', error);
        }
    } 
    useEffect( ()=> {
        getMusica();
    }, [musica]);
    */
    return(
        
        <View style={styles.container}>
            
                <View style={styles.titulo}>
                    <Text>Informe o nome de um cantor</Text>
                </View>
                <View>
                    <TextInput style={styles.input}
                        onChangeText={pegarTexto}
                        value={nomeMusica}
                        placeholder="Pesquisar cantor"
                        placeholderTextColor='#d8ecfb'
                    
                    />
                </View>
                <View> 
                    <TouchableOpacity style={styles.touchableOpacity} onPress={pesMusica}>
                        <Text style={styles.textPesquisar}>Pesquisar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.titulo2}>
                    <Text>Lista de Musicas</Text>
                </View>
                <View style={styles.titulo3}>
                    <Text >Quantidade: {dados.length}</Text>
                </View>
                
                <ListaMusicas
                  musica={dados}
                  mostrarFlatList={true}
                 />
        </View>
        
        
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
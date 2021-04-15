import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const Tela = ()=> {
    const [text, setText] = useState('');

    const pegarTexto = (text) => {
        setText(text);
    }

   
        const users = [
          {id:'1', name: 'Música 1', },
          {id:'2', name: 'Música 2', },  
          {id:'3', name: 'Música 3', },
          {id:'4', name: 'Música 4',},
          {id:'5', name: 'Música 5', },
          {id:'6', name: 'Música 6', },
          {id:'7', name: 'Música 7', },
          {id:'8', name: 'Música 8', },
        
        ]
      
        function User ({username}) {
          return (
              <Text style={styles.listaMusica}>{username}</Text>
          )
        }

    return(
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
                <Text >Quantidade: 50</Text>
            </View>
            <View>
            <FlatList 
                keyExtractor = {item => item.id}
                data={users}
                renderItem={ ({item}) => < User username={item.name} />}
      />
            </View>
        </View>
        
    )
}

export default Tela;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex:1,
        alignItems:'center',
        //justifyContent: 'center',
        paddingHorizontal:40,

    },

    titulo:{
        marginTop:80,

    },
    titulo2:{
        marginTop:57,
        marginLeft:1,
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
        backgroundColor: '#9b39cb',
        borderRadius:5,
        width:200,
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
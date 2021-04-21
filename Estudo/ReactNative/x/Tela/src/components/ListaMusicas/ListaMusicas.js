import React from  'react';
import {Text, View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ListaMusicas = (props) => {
    const {username} = props;
    return(
        <Text style={styles.listaMusica}>{username}</Text>
    );
}



export default ListaMusicas;

const styles= StyleSheet.create({

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
})
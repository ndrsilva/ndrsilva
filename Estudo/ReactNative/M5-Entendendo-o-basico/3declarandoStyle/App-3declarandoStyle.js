import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

export default () => {
    return (
        <SafeAreaView style={styles.page}>
            
            <Text style={{color:'#FFF', fontSize:25}}>Olá,Mundo!</Text>
            <Text style={styles.texto}>Segundo texto</Text>
            <Text style={[styles.texto, {fontSize: 15}]}>Terceiro texto</Text>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    page:{
        width: 200,
        height: 200,
        backgroundColor: '#FF0000'
    },

    texto:{
        color:'#0000FF',
        fontSize:10,
        textAlign: 'center'
    }
});
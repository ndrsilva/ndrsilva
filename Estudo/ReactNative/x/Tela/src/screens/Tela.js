import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Tela = ()=> {
    const [text, setText] = useState('');

    const pegarTexto = (text) => {
        setText(text);
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
                    placeholderTextColor='#000'
                    

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

    input:{
        borderBottomWidth: 1,
        height:50,
        color: '#000',
    }
});
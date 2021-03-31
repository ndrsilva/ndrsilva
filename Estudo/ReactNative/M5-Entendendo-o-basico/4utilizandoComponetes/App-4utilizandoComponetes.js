import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

//flex = Faz o backg cobrir toda a tela.
const Page = styled.SafeAreaView`
    flex:1; 
    backgroundColor: blue;
`;

const Texto = styled.Text`
    color:${props=>props.cor};
    font-size: 30px;
    background-color: green;
`;

export default () => {
    return (
        <Page>
            
            <Texto cor="red">Olá,Mundo!</Texto>
            <Texto cor="black">Segundo texto</Texto>
            <Texto cor="yellow">Terceiro texto</Texto>

        </Page>
    );
}


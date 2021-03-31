import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

//flex = Faz o backg cobrir toda a tela.
const Page = styled.SafeAreaView`
    backgroundColor: white; 
    flex:1; 
    flex-direction:row;
    
`;

const Quadrado = styled.View`
    width:50px;
    height:50px;
    background-color: ${props=>props.cor};
`;

export default () => {
    return (
        <Page>
            
            <Quadrado cor="red"></Quadrado>
            <Quadrado cor="green"></Quadrado>
            <Quadrado cor="blue"></Quadrado>

        </Page>
    );
}


import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

//flex = Faz o backg cobrir toda a tela.
//"flex-direction:"column; column-reverse; row; row-reverse
//"justify-content:"flex-start; flex-end; center; space-between; space-around;
//"align-items:"flex-start; flex-end; center; space-between; space-around;
const Page = styled.SafeAreaView`
    backgroundColor: white; 
    flex:1; 
    flex-direction:column;
    justify-content:center;
    align-items: center;
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
            <Quadrado cor="pink"></Quadrado>

        </Page>
    );
}


import React, { useEffect } from 'react';
import { Alert, Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  background-color:#fff;
  flex:1;
  justify-content:center;
  align-items:center;
`;

export default () => {

  useEffect(()=>{
  Alert.alert(
    'AVISO IMPORTANTE',//Titulo.
    'Hoje não terá ônibus!',//Mensagem
    [
      {text: 'Me lembre mas tarde!', onPress:()=>console.log('ELe irá responder mas tarde.')},
      {text: 'Não concordo', onPress:()=>console.log('Ele não concordou'), style:'cancel'},
      {text: 'Concordo', onPress:()=>console.log('Ele concordou.')},
    ]

  ); 
}, []);

 

  return (
    <Page>
      
    </Page>
  );
}
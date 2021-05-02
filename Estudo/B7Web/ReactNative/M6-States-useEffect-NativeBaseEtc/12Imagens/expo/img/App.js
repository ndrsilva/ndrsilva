import React, { useState } from 'react';
import { Image, Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

export default function App() {

  const [status, setStatus] = useState('');

  return(
    <Page>
      <Image 
        //source={require('./src/images/logo.jpg')} //img local
        source={{uri:'https:www.google.com.br/google.jpg'}}
        style={{width:200, height:200, backgroundColor:'#FF0000'}}
        resizeMode="cover"
        //img alternativa para aparecer até carregar a img correta.
        //defaultSource={{uri:''}}
        //msg durante o carregamento da img
        onLoadStart={()=>setStatus('Carregando...')}
        //msg que aparece depois que carregar a img
        onLoadEnd={()=>setStatus('Carregou!')}
        //msg de erro, se a img não for carregada
        onError={(e)=>alert(e.nativeEvent.error)}

      />
      <Text>{status}</Text>
    </Page>
  );
}
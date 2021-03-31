import React, {useState} from 'react'; 
import {View, Text} from 'react-native'
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  background-color:white;
  align-items:center;
`;
//config.Visual do Input
const Input = styled.TextInput`
  width:200px;
  height:40px;
  border:1px solid #000;
  color:#000;
`;


const Hello = () => {
  //setName na variável "name", que irá pro campo Input.
  const [name, setName] = useState('André');
  
  //recebe os dados da onChangeText
  function mudarTexto(nome) {
    setName(nome);
  }
  //A "function mudarText + Input" em apenas uma linha.
  //Basta apagar a function e substituir o Input do View por essa linha a baixo.
  //<Input value={name} onChangeText={(nome) => setName(nome)}/>
  return(
    <View>
      <Input value={name} onChangeText={mudarTexto}/>
      <Text>Olá, {name}</Text>
    </View>
    
  );
}

export default () => {
  return (
    <Page>
      <Hello />
    </Page>
  );
}
import React, {useState} from 'react'; 
import {View, Text, Button} from 'react-native'
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

const Quadrado = styled.View`
width:200px;
height:200px;
justify-content:center;
align-items:center;
border:3px dashed #000;
margin-top:30px;
`;

const Hello = () => {
  const [name, setName] = useState('André')
  const [mostrar, setMostrar] = useState(false)

  const handleClick = () => {
    if(mostrar == true) {
      setMostrar(false)
    } else {
      setMostrar(true)
    } 
  }
//ou
  //const handleClick = () => {
  //  setMostrar(!mostrar)
  //}

  return(
    <View>
      <Input value={name} onChangeText={t=>setName(t)} />

      <Button title={mostrar ? 'Ocultar Nome' : 'Mostrar Nome'} onPress={handleClick} />
      {mostrar &&
        <Quadrado>
          <Text>{name}</Text>
        </Quadrado>
      }
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
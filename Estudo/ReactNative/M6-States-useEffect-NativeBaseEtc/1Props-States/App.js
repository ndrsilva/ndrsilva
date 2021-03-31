import React, {useState} from 'react'; 
import {Text} from 'react-native'
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  background-color:white;
  align-items:center;
`;

/*
// 1- Declarando texto na tela
const Hello = () => {
  return(
    <Text>Frase qualquer</Text>

  );
}

export default () => {
  return (
    <Page>
      <Hello />
    </Page>
  );
}
*/
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
//Usando "props".
//ou pode jogar a variável "frase" com chaves direto na "const e no Text"
const Hello = (props) => {
  return(
    <Text>{props.frase}</Text>
  );
  
}

export default () => {
  return (
    <Page>
      <Hello frase="Seja Bem Vindo(a)" />
      <Hello frase="Outra frase" />
      <Hello frase="Mas uma" />
    </Page>

  );
}
*/

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const Hello = (props) => {
  const [name, setName] = useState('ndrsilva');

  return(
    <Text>Nome: {name}</Text>
  );
  
}

export default () => {
  return (
    <Page>
      <Hello frase="Seja Bem Vindo(a)" />
    </Page>

  );
}
import React, { Component } from 'react';
import {Text} from 'react-native';

/* 
//forma antiga e mas simples de declarar um texto.
export default () => {
  return <Text>Olá, Mundo!</Text>;
}
*/

/*
//Declarando um texto por uma CONST.
const TextoInicial = () => {
  return (
    <Text>Texto Qualquer...</Text>
  );
}
*/

/*
//Declarando um texo com FUNCTION
function TextoInicial() {
  return (
    <Text>Texto 2</Text>
  );
}
*/

/*
//Declarando um texto com CLASS. 
//O grupo RN indicar para não ultilizar mas 'class' e sim 'function' para os novos projetos e atualizações.
class TextoInicial extends Component {
  render() {
    return (
      <Text>Texto 3</Text>
    );
  }
}
*/

//Forma simples e atual para declarar um Texto.
const TextoInicial = () => <Text>Texto 4</Text>;

export default TextoInicial;
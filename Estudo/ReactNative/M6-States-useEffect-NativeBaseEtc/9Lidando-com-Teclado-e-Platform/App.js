import React, {useEffect} from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  background-color:white;
  flex:1;
  justify-content:center;
  align-items:center;
`;
const Logo = styled.View`
  width:100px;
  height:100px;
  background-color:#000;
  margin-bottom:20px
`;

const Input = styled.TextInput`
  width:90%;
  height:50px;
  border:1px solid #000;
`;

const KeyboardArea = styled.KeyboardAvoidingView`
  flex:1;
  width:100%;
  background-color:#FF00FF;
  justify-content:center;
  align-items:center;
`;

export default () => {
  return (
    //
    //<KeyboardArea behavior="padding">
    <Page>
      <KeyboardArea behavior={Platform.OS=='ios'?'podding':null}>
        <Logo></Logo>
        <Input />
      </KeyboardArea>
    </Page>
  );
}
import React, { useEffect } from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  background-color:#fff;
  flex:1;
  justify-content:center;
  align-items:center;
`;

export default () => {
  /*
  useEffect(()=>{
    let {width, height} = Dimensions.get('window');
    alert(width+"X"+height);
  }, []);
*/
//ou
  useEffect(()=>{
    let largura = Dimensions.get('window').width;
    let altura = Dimensions.get('window').height;
    alert("LAGURA "+largura+"     ALTURA "+altura);
  }, []);
 

  return (
    <Page>
      
    </Page>
  );
}
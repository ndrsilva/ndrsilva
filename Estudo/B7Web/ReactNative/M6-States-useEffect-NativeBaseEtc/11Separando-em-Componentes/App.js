import React from 'react';
import styled from 'styled-components/native';
import Header from './src/components/Header';

const Page = styled.SafeAreaView`
  background-color:#fff;
  flex:1;
`;

export default () => {


 

  return (
    <Page>
      <Header />
    </Page>
  );
}
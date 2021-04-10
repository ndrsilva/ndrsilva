import React from 'react';
import styled from 'styled-components';

const Header = styled.View`
    width:100%;    
    height:60px;
    background-color:#CCC;
    justify-content:center;
    align-items:center;
`;

const HeaderText = styled.Text`

`;

export default () => {
    return (
        <Header>
            <HeaderText>Texto qualquer...</HeaderText>
        </Header>
    );
}
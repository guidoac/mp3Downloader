import styled from 'styled-components/native';
import React from 'react';

export const NavBar = styled.View`
  background-color: #dbdbdb;
  height: 40px;
  top: 50px;
  flex-direction: row;
`

const InputURL = styled.TextInput`
  background-color: #DADADA;
  width: 75%;
  margin: 0px 0px 0px 5px;
  border: 1px solid black;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

const ButtonPesquisar = styled.TouchableOpacity`
  background-color: #306d34;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  flex: 1;
  margin-right: 5px;
`

export default class Nav extends React.Component {
  render() {
    return (
      <NavBar>
        <InputURL />
        <ButtonPesquisar></ButtonPesquisar>
      </NavBar>
    )
  }
}

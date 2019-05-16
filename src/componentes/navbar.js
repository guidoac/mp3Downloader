import styled from 'styled-components/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBar = styled.View`
  background-color: #dbdbdb;
  height: 40px;
  top: 50px;
  flex-direction: row;
`

const LogoYT = styled.Image`
  height:40px;
  width: 30%;
  margin: 5px;
  position: absolute;
  align-self:center;
`

const InputURL = styled.TextInput`
  background-color: #DADADA;
  width: 75%;
  margin: 0px 0px 0px 5px;
  border: 1px solid #306d34;
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

const ButtonDownloadPL = styled.TouchableOpacity`
  height: 40px;
  background-color: #306d34;
  top:50px;
  margin: 5px;
  border-radius: 5px;
`

export default class NavBarContainer extends React.Component {
  render() {
    return (
      <>
        <LogoYT
          source={require("../recursos/logoyt.png")}
        />
        <NavBar>
          <InputURL 
          placeholder="Digite a URL aqui"
          placeholderTextColor="black"
          />
          <ButtonPesquisar><Icon
            name="search"
            size={18}
            color="#999"
          />
          </ButtonPesquisar>
        </NavBar>
        <ButtonDownloadPL />
      </>
    );
  }
}

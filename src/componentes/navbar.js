import styled from 'styled-components/native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconComm from 'react-native-vector-icons/MaterialCommunityIcons' ;
import api from '../servicos/api';

const Header = styled.View`
  border-bottom-width: 0.5;
  border-bottom-color: #5c895d;
`

const LogoYT = styled.Image`
  height:40px;
  width: 30%;
  margin: 5px;
  position: relative;
  align-self:center;
`
const NavBar = styled.View`
  background-color: transparent;
  height: 40px;
  flex-direction: row;
  flex-wrap:wrap;
  position:relative;
`

const InputURL = styled.TextInput`
  border: 1px solid #79c66b;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #DADADA;
  width: 75%;
  margin: 0px 0px 0px 5px;
  
`

const ButtonPesquisar = styled.TouchableOpacity`
  background-color: #79c66b;
  border-top-right-radius: 15px; 
  border-bottom-right-radius: 15px;
  flex: 1;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
`

const ButtonDownloadPL = styled.TouchableOpacity`
  height: 40px;
  background-color: #79c66b;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position:relative;
  margin: 5px 5px 3px 5px;
  border-radius: 15px;  
`
const TextoDownloadPL = styled.Text`
  font-size: 18px;
  padding-left: 10px;
`

export default class NavBarContainer extends Component {
 
  state = {
    videosBusca: []
  }

  pesquisarPL = async () => {
    const response = await api.get("/pesquisar?playlistID=PL9tY0BWXOZFvdeHbEJr7Wiztcue35IStT");
    this.setState({
      videosBusca: response.data,
    })
  }
  
  render() {
    return (
      <Header>
        <LogoYT
          source={require("../recursos/logoyt.png")}
        />
        <NavBar>
          <InputURL 
          placeholder="digite a URL aqui"
          placeholderTextColor="black"
          />
          <ButtonPesquisar onPress={ this.pesquisarPL }>
            <Icon 
            name="search"
            style={{fontSize:35}}
            />
          </ButtonPesquisar>
        </NavBar>
        <ButtonDownloadPL>
            <IconComm 
                name="download-multiple"
                style={{fontSize:25}}
            />
            <TextoDownloadPL>
              BAIXAR PLAYLIST
            </TextoDownloadPL>
        </ButtonDownloadPL>
      </Header>
    );
  }
}

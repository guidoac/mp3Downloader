import styled from 'styled-components/native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconComm from 'react-native-vector-icons/MaterialCommunityIcons' ;
import { URL, URLSearchParams } from 'whatwg-url';
import { Buffer } from 'buffer';

global.Buffer = Buffer;
global.URL = URL;
global.URLSearchParams = URLSearchParams;

const Header = styled.View`
  border-bottom-width: 0.5;
  border-bottom-color: #5c895d;
`

const LogoYT = styled.Image`
  height:40px;
  width: 30%;
  margin: 5px;
  position: relative;
  align-self: center;
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
  border-width: 1px;
  border-left-width: 0px;
  border-color: #79c66b;
  border-top-right-radius: 15px; 
  border-bottom-right-radius: 15px;
  flex: 1;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
  background-color: #DADADA;
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
  constructor(){
    super();
  }
  
  clicouPesq(){
    this.props.pesqPlaylist()
  }

  inseriuURL(e){
    this.props.inseriuURL(e)
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
          onChange={ this.inseriuURL.bind(this) }
          selectTextOnFocus={ true }
          />
          <ButtonPesquisar onPress={ this.clicouPesq.bind(this) }>
            <Icon 
            name="search"
            style={{fontSize:35, color: '#46723d'}}
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

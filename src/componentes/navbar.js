import { Header, LogoYT, NavBar, InputURL, ButtonPesquisar, ButtonDownloadPL, TextoDownloadPL} from './Styles';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IconComm from 'react-native-vector-icons/MaterialCommunityIcons' ;
import { URL, URLSearchParams } from 'whatwg-url';
import { Buffer } from 'buffer';

global.Buffer = Buffer;
global.URL = URL;
global.URLSearchParams = URLSearchParams;

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
            style={{fontSize:30, color: '#009200'}}
            /> 
          </ButtonPesquisar>
        </NavBar>
        <ButtonDownloadPL>
            <IconComm 
                name="download-multiple"
                style={{fontSize:25, color:'#009200'}}
            />
            <TextoDownloadPL>
              baixar playlist
            </TextoDownloadPL>
        </ButtonDownloadPL>
      </Header>
    );
  }
}

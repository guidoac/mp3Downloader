import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import NavBarContainer from './componentes/navbar';
import ScrollViewContainer from './componentes/scrollViewContainer'
import api from './servicos/api';
import LinearGradient from 'react-native-linear-gradient'

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      itensPesq: [],
      inputIDPlaylist: ''
    }
  }

  async pesqPlaylist(){
    const response = await api.get('/pesquisar?playlistID=' + this.state.inputIDPlaylist);
    this.setState({ itensPesq: response.data })
  }

  inseriuURL(e){
    const formatInput = e.nativeEvent.text.substring(e.nativeEvent.text.indexOf('https'),)
    const url = new URL(formatInput)
    const idPlaylist = url.searchParams.get('list')
    
    this.setState({ inputIDPlaylist: idPlaylist })
  }
  
  render(){
      return (
        <>
          <StatusBar backgroundColor='rgba(230,230,230, 0.4)' barStyle="dark-content"/>
          <LinearGradient colors={['rgba(230,230,230, 0.4)', 'rgba(133,133,133,0.82)']} style={{ flex: 1 }}>
            <NavBarContainer pesqPlaylist={ this.pesqPlaylist.bind(this) } inseriuURL={ this.inseriuURL.bind(this) }/>
            <ScrollViewContainer listaVideos={this.state.itensPesq}/>
          </LinearGradient>
        </>
      );
  }
};

// opções cor linear gradient ['#61ce61', '#2f912f']
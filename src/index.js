import React, { Component } from 'react';
import NavBarContainer from './componentes/navbar';
import Container from './componentes/container';
import ScrollView from './componentes/scrollViewContainer'
import api from './servicos/api';

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
          <Container>
            <NavBarContainer pesqPlaylist={ this.pesqPlaylist.bind(this) } inseriuURL={ this.inseriuURL.bind(this) }/>
            <ScrollView listaVideos={this.state.itensPesq}/>
          </Container>
        </>
      );
  }
};
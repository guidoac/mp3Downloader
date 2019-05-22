import React, { Component } from 'react';
import NavBarContainer from './componentes/navbar';
import Container from './componentes/container';
import ScrollView from './componentes/scrollViewContainer'
import api from './servicos/api';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      itensPesq: []
    }
  }

  async pesqPlaylist(idPlaylist){
    const response = await api.get('/pesquisar?playlistID=' + idPlaylist);
    this.setState({itensPesq: response.data})
  }
  
  render(){
      return (
        <>
          <Container>
            <NavBarContainer pesqPlaylist={ this.pesqPlaylist.bind(this) }/>
            <ScrollView listaVideos={this.state.itensPesq}/>
          </Container>
        </>
      );
  }
};
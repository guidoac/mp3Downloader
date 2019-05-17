import React, { Component } from 'react';
import NavBarContainer from './src/componentes/navbar';
import Container from './src/componentes/container';
import ScrollView from './src/componentes/scrollViewContainer'

export default class App extends Component{
  render(){
      return (
        <>
          <Container>
            <NavBarContainer />
            <ScrollView />
          </Container>
        </>
      );
  }
};
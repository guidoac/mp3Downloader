import React, { Component } from 'react';
import NavBarContainer from './componentes/navbar';
import Container from './componentes/container';
import ScrollView from './componentes/scrollViewContainer'

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
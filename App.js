import React, { Component } from 'react';
import NavBarContainer from './src/componentes/navbar';
import {Container} from './src/componentes/container';

export default class App extends Component{
  render() {
    return (
      <Container>
        <NavBarContainer />
      </Container>
    );
  }
};
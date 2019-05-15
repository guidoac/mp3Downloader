import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import NavBar from './src/componentes/navbar';
import { Container } from './src/componentes/container'

export default class App extends React.Component{
  render() {
    return (
      <Container>
        <NavBar />
      </Container>
    );
  }
};

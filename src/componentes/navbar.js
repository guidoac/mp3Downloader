import styled from 'styled-components/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconComm from 'react-native-vector-icons/MaterialCommunityIcons' 

const LogoYT = styled.Image`
  height:40px;
  width: 30%;
  margin: 5px;
  position: relative;
  align-self:center;
`
const NavBar = styled.View`
  background-color: #dbdbdb;
  height: 30px;
  flex-direction: row;
  flex-wrap:wrap;
  position:relative;
`

const InputURL = styled.TextInput`
  background-color: #DADADA;
  width: 75%;
  margin: 0px 0px 0px 5px;
  border: 1px solid #79c66b;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`

const ButtonPesquisar = styled.TouchableOpacity`
  background-color: #79c66b;
  border-top-right-radius: 5px; 
  border-bottom-right-radius: 5px;
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
  margin: 5px 0px 1px 0px;
  
`
const TextoDownloadPL = styled.Text`
  font-size: 18px;
  padding-left: 10px;
`

export default class NavBarContainer extends React.Component {
  render() {
    return (
      <>
        <LogoYT
          source={require("../recursos/logoyt.png")}
        />
        <NavBar>
          <InputURL 
          placeholder="digite a URL aqui"
          placeholderTextColor="black"
          />
          <ButtonPesquisar>
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
      </>
    );
  }
}

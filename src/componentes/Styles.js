import styled from 'styled-components'

export const Header = styled.View`
  border-bottom-width: 0.5;
  border-bottom-color: #5c895d;
`

export const LogoYT = styled.Image`
  height:40px;
  width: 30%;
  margin: 5px;
  position: relative;
  align-self: center;
`
export const NavBar = styled.View`
  background-color: transparent;
  height: 40px;
  flex-direction: row;
  flex-wrap:wrap;
  position:relative;
`

export const InputURL = styled.TextInput`
  border: 1px solid #009200;
  border-top-left-radius: 17px;
  border-bottom-left-radius: 17px;
  background-color: transparent;
  width: 75%;
  margin: 0px 0px 0px 5px;
  padding-left: 10px;
`

export const ButtonPesquisar = styled.TouchableOpacity`
  background-color: rgba(0,146,0,0.3);
  border: 1px solid #009200;
  border-left-width: 0px;
  border-top-right-radius: 17px; 
  border-bottom-right-radius: 17px;
  flex: 1;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
`

export const ButtonDownloadPL = styled.TouchableOpacity`
  height: 40px;
  background-color: rgba(0,146,0,0.3);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position:relative;
  margin: 5px 5px 3px 5px;
  border: 1px solid #009200;
  border-radius: 17px;  
`
export const TextoDownloadPL = styled.Text`
  font-size: 18px;
  padding-left: 6px;
  color: #009200;
`

export const ScrollViewContainer = styled.FlatList`
    background-color: transparent;
`
export const ButtonDropdown = styled.View`
    background-color: transparent;
    align-items: center;
    justify-content: flex-end;
    z-index: 4000;
`
export const Item = styled.View`
    height: 95px;
    flex-direction: row;
    margin: 7px 5px;
    background-color: #FFF;
    position: relative;
    border-radius: 8px;
    elevation: 10;
`
export const ThumbContainer = styled.TouchableOpacity`
    height: 100%;
    position: relative;
    align-self: center;
    
`
export const Thumb = styled.Image`
    height: 100%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
`
export const DetalhesVideo = styled.View`
    align-items: flex-start;
    flex:1;
    padding-top:5px;
    position: relative;
    padding-left: 10px;
`

export const TituloVideo = styled.Text`
    height: 65%;
    font-size: 17px;
`

export const ButtonBaixarVideo = styled.TouchableOpacity`
    border-top-width: 1px;
    border-top-color: #009200;
    align-self: center;
    width: 100%;
    align-items: center;
    margin-right: 10px;
    padding-top: 3px;
`
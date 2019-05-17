import styled from 'styled-components/native';
import React from 'react';
import {StyleSheet} from 'react-native';

const Item = styled.View`
    height: 80px;
    width: 100%;
    border-bottom-color: black;
    border-bottom-width: ${StyleSheet.hairlineWidth};
    flex-direction: row;
`
const Thumb = styled.Image`
    height: 100%;
    position: relative;
`
const DetalhesVideo = styled.View`
    align-items: center;
    flex:1;
    padding-top:5px;
    position: relative;
`

const TituloVideo = styled.Text`
    font-size: 20px;
    margin-bottom: 10px;
`

const ButtonBaixarVideo = styled.TouchableOpacity`
    flex:1;
    width: 100%;
    background-color: #c9c9c9;

`

export default class ItemLista extends React.Component{
    render(){
        return(
            <>
                <Item>
                    <Thumb
                    source={{uri:"https://img.youtube.com/vi/hHW1oY26kxQ/default.jpg"}}
                    style={{aspectRatio:1.3,}}
                    />
                    <DetalhesVideo>
                        <TituloVideo>Titulo do video aqui</TituloVideo>
                        <ButtonBaixarVideo>
                        </ButtonBaixarVideo>
                    </DetalhesVideo>
                </Item>
            </>
        )
    }
}
import styled from 'styled-components/native';
import React from 'react';

const Item = styled.View`
    height: 80px;
    flex-direction: row;
    margin: 5px;
    background-color: #e8e8e8;
`
const Thumb = styled.Image`
    height: 100%;
    position: relative;
    align-self: center;
`
const DetalhesVideo = styled.View`
    align-items: flex-start;
    border-color: #5c895d;
    border-width: 0.3;
    border-left-width:0px;
    flex:1;
    padding-top:5px;
    position: relative;
    padding-left: 10px;
`

const TituloVideo = styled.Text`
    font-size: 20px;
    margin-bottom: 10px;
`

const ButtonBaixarVideo = styled.TouchableOpacity`
    height: 40px;
    background-color: red;   
`

export default class ItemLista extends React.Component{
    render(){
        return(
            <>
                <Item>
                    <Thumb
                    source={{uri:"https://img.youtube.com/vi/hHW1oY26kxQ/maxresdefault.jpg"}}
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
import styled from 'styled-components/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Item = styled.View`
    height: 80px;
    flex-direction: row;
    margin: 2.5px 5px;
    background-color: #e8e8e8;
    position: relative;
`
const Thumb = styled.Image`
    height: 100%;
    position: relative;
    align-self: center;
`
const DetalhesVideo = styled.View`
    align-items: flex-start;
    border-color: #5c895d;
    border-width: 0;
    border-left-width:0px;
    flex:1;
    padding-top:5px;
    position: relative;
    padding-left: 10px;
`

const TituloVideo = styled.Text`
    height: 50%;
    font-size: 17px;
    margin-bottom: 5px;
`

const ButtonBaixarVideo = styled.TouchableOpacity`
    background-color: #79c66b;
    align-self: center;
    width: 100%;
    align-items:center;
    margin-right: 10px;
    border-radius: 10px;
`

export default class ItemLista extends React.Component{
    render(){
        return(
            <>
                <Item>
                    <Thumb
                    source={{uri: this.props.linkThumb}}
                    style={{aspectRatio:1.3,}}
                    />
                    <DetalhesVideo>
                        <TituloVideo>{ this.props.videoTitle }</TituloVideo>
                        <ButtonBaixarVideo>
                            <Icon 
                                name="download"
                                style={{fontSize:25}}
                            />
                        </ButtonBaixarVideo>
                    </DetalhesVideo>
                </Item>
            </>
        )
    }
}
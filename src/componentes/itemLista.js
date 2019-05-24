import { Item, Thumb, DetalhesVideo, TituloVideo, ButtonBaixarVideo } from './Styles';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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
                                style={{fontSize:25, color: '#46723d'}}
                            />
                        </ButtonBaixarVideo>
                    </DetalhesVideo>
                </Item>
            </>
        )
    }
}
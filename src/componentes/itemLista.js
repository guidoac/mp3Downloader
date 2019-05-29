import { Item, Thumb, DetalhesVideo, TituloVideo, ButtonBaixarVideo, ThumbContainer } from './Styles';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ItemLista extends React.Component {
    render() {
        return (
            <>
                <Item>
                    <ThumbContainer>
                        <Thumb
                            source={{ uri: this.props.linkThumb }}
                            style={{ aspectRatio: 1.3, }}
                        />
                    </ThumbContainer>
                    <DetalhesVideo>
                        <TituloVideo>{this.props.videoTitle}</TituloVideo>
                        <ButtonBaixarVideo>
                            <Icon
                                name="download"
                                style={{ fontSize: 25, color: '#009200' }}
                            />
                        </ButtonBaixarVideo>
                    </DetalhesVideo>
                </Item>
            </>
        )
    }
}
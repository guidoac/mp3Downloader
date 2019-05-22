import styled from 'styled-components/native';
import React from 'react';
import DropDownVideo from './dropdownVideo';
import ItemLista from './itemLista'

const ScrollViewContainer = styled.ScrollView`
    background-color: #dbdbdb;
    position:relative;
`

export default class ScrollView extends React.Component{
    render(){
        console.log(this.props.listaVideos)
        return(
            <>
                <ScrollViewContainer>
                    <DropDownVideo />
                    { this.props.listaVideos.map( video => {
                        return(
                            <ItemLista key={ video.id } linkThumb={video.urlthumb} videoTitle={ video.name } linkVideo={ video.url } />
                        ) 
                    })}
                </ScrollViewContainer>
            </>
        )
    }
}
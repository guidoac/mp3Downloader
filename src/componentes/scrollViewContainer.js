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
        return(
            <>
                <ScrollViewContainer>
                    <DropDownVideo />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                    <ItemLista />
                </ScrollViewContainer>
            </>
        )
    }
}
import styled from 'styled-components/native';
import React from 'react';
import DropDownVideo from './dropdownVideo';
import ItemLista from './itemLista';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Animated } from 'react-native';

const ScrollViewContainer = styled.ScrollView`
    background-color: #dbdbdb;
    position:relative;
`

var translateY = new Animated.Value(0)

var animatedEvent = Animated.event(
    [
        {
            nativeEvent: {
                translationY: translateY,
            }
        }
    ],
    { useNativeDriver: true }
)


function onHandlerStateChange(event) {

}

export default class ScrollView extends React.Component{
    render(){
        return(
            <>
                <ScrollViewContainer>
                    <PanGestureHandler
                        onGestureEvent={animatedEvent}
                        onHandlerStateChange={onHandlerStateChange}
                    >  
                        <DropDownVideo style={{ transform: [{ translateY, }] }} />
                    </PanGestureHandler >
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
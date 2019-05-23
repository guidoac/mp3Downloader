import styled from 'styled-components/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PanResponder } from 'react-native'

const ButtonDropdown = styled.View`
    background-color: #dbdbdb;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    border-radius:3px;
    padding-left: 5px;
    padding-right: 5px;
`

export default class DropDownVideo extends React.Component {
    constructor(){
        super();
        this.state={
            height: 25
        }
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                this.setState({ height: gestureState.dy})
                console.log(gestureState.dy)
            }
        })
    }

    render() {
        return (
            <ButtonDropdown style={{height: this.state.height}} {...this._panResponder.panHandlers}>
                <Icon
                    name="arrow-expand-down"
                    style={{ color: 'black', fontSize: 18, }}
                />
            </ButtonDropdown>
        );
    }
}
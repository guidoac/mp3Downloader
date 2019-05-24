import { ButtonDropdown } from './Styles';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { PanResponder } from 'react-native'

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
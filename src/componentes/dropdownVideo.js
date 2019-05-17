import styled from 'styled-components/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Animated } from 'react-native';

const ButtonDropdown = styled(Animated.View)`
    height: 25px;
    background-color: transparent;
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius:3px;
    margin-left: 5px;
    margin-right: 5px;
`

export default class DropDownVideo extends React.Component {

    render() {
        return (
            <ButtonDropdown>
                <Icon
                    name="arrow-expand-down"
                    style={{ color: 'black', fontSize: 18, }}
                />
            </ButtonDropdown>
        );
    }
}
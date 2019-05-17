<<<<<<< HEAD
import styled from 'styled-components/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonDropdown = styled.TouchableOpacity`
    height: 25px;
    background-color: #486642;
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
`

export default class DropDownVideo extends React.Component {
  render() {
    return (
        <>
            <ButtonDropdown>
                <Icon 
                    name="arrow-expand-down"
                    style={{color: '#c9c9c9', fontSize: 18,}}
                />
            </ButtonDropdown>
        </>
    );
  }
=======
import styled from 'styled-components/native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonDropdown = styled.TouchableOpacity`
    height: 25px;
    background-color: #486642;
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
`

export default class DropDownVideo extends React.Component {
  render() {
    return (
        <>
            <ButtonDropdown>
                <Icon 
                    name="arrow-expand-down"
                    style={{color: '#c9c9c9', fontSize: 18,}}
                />
            </ButtonDropdown>
        </>
    );
  }
>>>>>>> 16a0137447555c83a158a8207505f350122a3d30
}
import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';

export default class Loading extends React.Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.props.navigation.navigate("Home");
    }

    render(){
        return(
            <Container>
                <Logo source={require('../assets/images/full-logo-github.png')}/>
                <ActivityIndicator size='large' style= {{ marginTop: 10 }}/>
            </Container>
        );
    }
}

Loading.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #1B2128;
`;

const Logo = styled.Image`
  width: 60%;
  height: 60%;
  resizeMode: center;
`;

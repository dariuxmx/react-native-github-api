import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar, Text } from 'react-native';
import { MainContainer, GenericInput } from '../utils/Styles';

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Search Repositories',
        headerStyle: {
            backgroundColor: "#1B2128",
            fontSize: 17
        }
    })
    render() {
        return (
            <MainContainer></MainContainer>
        )
    }
}

export default HomeScreen;

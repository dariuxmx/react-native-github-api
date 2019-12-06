import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default class CustomText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontLoaded: true,
        }
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Khand-Regular': require('../assets/fonts/Khand-Regular.ttf')
        });
        this.setState({ fontLoaded: false });
    }

    render(){
        if (this.state.fontLoaded){
            return <ActivityIndicator />
        }
        return(
            <View>
                <Text style={fontStyle.defaultStyle}>
                    {this.props.children}
                </Text>
            </View>   
        );
    }
}

const fontStyle = StyleSheet.create({
    defaultStyle: {
        fontFamily: 'Khand-Regular'
    }
})
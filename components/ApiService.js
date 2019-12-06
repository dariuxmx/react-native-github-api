import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, Text } from 'react-native';
const apiBaseUrl = 'https://api.github.com/search/repositories';
const { repoName } = this.props;

class ApiService extends React.Component {
    //1. Constructor
    constructor(){
        super();
        this.state = {
            repos: [],
            apiLoaded: true
        };
    }

    //2. ComponentDidMount
    async componentDidMount(){
        // fetch({apiBaseUrl} + {repoName})
        fetch('https://api.github.com/search/repositories?q=react+native')
        .then(res => res.json())
        .then((data) => {
            this.setState({ repos: data});
        })
        .catch(console.log)
    }

    //3. Render
    render(){
        if(this.state.apiLoaded){
            return <ActivityIndicator />
        }
        return(
            <View>
                <Text>
                    {this.props.children}
                </Text>
            </View>   
        );
    }


}
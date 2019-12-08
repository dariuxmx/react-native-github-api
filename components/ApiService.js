import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, View, Text } from 'react-native';

export default class ApiService extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            isLoading: true,
            repositories: [],
        }
      }

    componentDidMount(){
        // fetch({apiBaseUrl} + {repoName})
        return fetch('https://api.github.com/search/repositories?q=react+native')
        .then(res => res.json())
        .then((data) => {
            this.setState({ repositories: data});
            this.setState( {apiLoaded: false});
        })
        .catch(console.log)
    }

    render(){
        return(
            <View>
                <Text>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}   
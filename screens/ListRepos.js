import React from 'react';
import ApiService from '../components/ApiService';
import { Text, View, FlatList } from 'react-native';
import Repo from '../components/Repo';

class ListRepos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            query: props.navigation.state.params.query
          };
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Results',
        headerStyle: {
            height: 100,
            shadowColor: 'transparent',
            backgroundColor: "#F2F2F2",
            borderBottomWidth: 0,
            fontSize: 17
        },
    })

    async componentDidMount(){
        try {
            const response = await fetch('https://api.github.com/search/repositories?sort=stars&order=desc&q=' + this.state.query);
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.items,
            }, function () {
            });
        }
        catch (error) {
            console.error(error);
        }
    }


    render(){
        return(
            <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => (
                    <Repo name={item.full_name} description={item.description} language={item.language}/>
                )}
                keyExtractor={({id}, index) => id}
            />
        );
    }
}

export default ListRepos;
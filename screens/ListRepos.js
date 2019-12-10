import React from 'react';
import { FlatList, ActivityIndicator, Alert, StyleSheet, View, Text, Modal, Button } from 'react-native';
import Repo from '../components/Repo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CtaButton from '../components/CtaButton';
import ModalView from './Modal';

class ListRepos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            id: null,
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

    
    // Parse api
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

    _onPressItem(id) {
        this.setState({
            modalVisible: true,
            id: id
        });
    }

    _renderRepoItem = ({item}) => {
        return(
            <TouchableOpacity
                id={ item.name }
                onPress={() => this._onPressItem(item.name)}
                >
                    <Repo name={item.full_name} description={item.description} language={item.language}/>
            </TouchableOpacity>
        )
    }

    render(){
        if (this.state.isLoading){
            return <ActivityIndicator />
        }
        return(
            <View>
                <ModalView
                    id = { this.state.id }
                    modalVisible = { this.state.modalVisible }
                    setModalVisible = { (vis) => { this.setState({
                        modalVisible: vis
                      })
                    }}
                />
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this._renderRepoItem}
                    keyExtractor={item => item.full_name}
                />
            </View>
        );
    }
}

export default ListRepos;

import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import Repo from '../components/Repo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalView from './Modal';

class ListRepos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            avatar: '',
            id: null,
            query: props.navigation.state.params.query
          };
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Resultados',
        headerStyle: {
            height: 100,
            shadowColor: 'transparent',
            backgroundColor: "#F2F2F2",
            borderBottomWidth: 0,
            fontSize: 17
        },
    })
    
    // Parse Api: /search/repositories
    // Url: https://developer.github.com/v3/search/
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

    _onPressItem(id, item) {
        this.setState({
            modalVisible: true,
            id: id,
            repoDetails: item,
            avatar: id.avatar_url
        });
    }

    _renderRepoItem = ({item}) => {
        return(
            this.state.dataSource.map((repoArray, index) => (
               <TouchableOpacity
                    key={`repoArray-${index}`}
                    id={ repoArray.name }
                    onPress={() => this._onPressItem((repoArray.name), item)}
                    >
                        <Repo 
                            name={repoArray.full_name}
                            thumb={repoArray.owner.avatar_url}
                            description={repoArray.description}
                            language={repoArray.language}
                        />
                </TouchableOpacity>
                )
            )
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
                    repoDetails = { this.state.repoDetails }
                    modalVisible = { this.state.modalVisible }
                    avatar = { this.state.avatar }
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

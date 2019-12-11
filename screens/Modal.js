import React from 'react';
import { Modal, Text, TouchableHighlight, FlatList, ActivityIndicator } from 'react-native';
import styled from "styled-components";
import CommitCell from '../components/CommitCell';
import CtaButton from '../components/CtaButton';

class ModalView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            repoName: 'airbnb/lottie-ios',
            modalVisible: props.modalVisible,
            avatar: props.avatar_url,
            id: null,
            date: new Date()
        }
    };

    // Parse Api: /search/commits
    // Url: https://developer.github.com/v3/search/
    componentWillReceiveProps(nextProps) {
        fetch('https://api.github.com/search/commits?sort=author-date&q=' + this.state.reponame + '/commits', {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github.cloak-preview'
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                responseData: response.items,
                isLoading: false
            });
        })
        .catch(error => {
            console.error(error);
        });

        this.setState ({
            modalVisible: nextProps.modalVisible,
            avatar: nextProps.avatar_url,
            id: nextProps.id
        })
    }

    _renderCommitItem = (item) => {
        return(
            this.state.responseData.map((repoDetails, index) => (
                    <CommitCell 
                        key={index}
                        date={this.state.date.toLocaleDateString()}
                        name={repoDetails.commit.committer.name}
                        author={repoDetails.commit.author.name}
                        commitMessage={repoDetails.repository.full_name}
                    />
                )
            )
        )
    }

    render(){
        if (this.state.isLoading){
            return <ActivityIndicator />
        }
        return(
                <Modal
                animationType="slide"
                transparent={ true }
                visible={ this.state.modalVisible }
                onRequestClose={() => { this.props.setModalVisible(false) }}>
                    <Container>
                        {/* <Image source={{uri: this.state.avatar}}/> */}
                        <Text>{this.state.avatar}</Text>
                        <FlatList
                            data={this.state.responseData}
                            renderItem={this._renderCommitItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <TouchableHighlight
                            onPress = {() => { this.props.setModalVisible(false) }}
                        >
                            <CtaButton title="Cerrar" />
                        </TouchableHighlight>
                    </Container>
                </Modal>
        );
    }
}

export default ModalView;

const Container = styled.View`
  background-color: white;
  width: 86%;
  height: 86%;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin: 7%;
  flex: 1;
`;

const Image = styled.View`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
    resize-mode: cover;
`;

import React from 'react';
import { Modal, Text, TouchableHighlight } from 'react-native';
import styled from "styled-components";

class ModalView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: props.modalVisible,
            avatar: props.avatar_url,
            id: null
        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState ({
            modalVisible: nextProps.modalVisible,
            avatar: nextProps.avatar_url,
            id: nextProps.id
        })
    }

    render(){
        return(
            <Modal
            animationType="slide"
            transparent={ false }
            visible={ this.state.modalVisible }
            onRequestClose={() => { this.props.setModalVisible(false) }}>
                <Container>
                    <Image source={{ url: this.state.avatar_url }} />
                <Text>{ this.state.id }</Text>
                        <TouchableHighlight
                            onPress = {() => { this.props.setModalVisible(false) }}
                        >
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    {/* <Cover>
                    <Image source={props.image} />
                    <Title>{props.title}</Title>
                    </Cover>
                    <Content>
                    <Logo source={props.logo} />
                    <Wrapper>
                        <Caption>{props.caption}</Caption>
                        <Subtitle>{props.subtitle}</Subtitle>
                        <Text>{ this.state.id }</Text>
                        <TouchableHighlight
                            onPress = {() => { this.props.setModalVisible(false) }}
                        >
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </Wrapper>
                    </Content> */}
                </Container>
        </Modal>
        );
    }
}

export default ModalView;


const Wrapper = styled.View`
  margin-left: 10px;
`;

const Content = styled.View`
  flex-direction: row;
  padding-left: 20px;
  align-items: center;
  height: 80px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  width: 170px;
  margin-top: 20px;
  margin-left: 20px;
`;

const Container = styled.View`
  background-color: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
  margin-top: 20px;
`;

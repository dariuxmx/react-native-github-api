import React from 'react';
import { MainContainer, GenericInput, ScreenTitleLabel, SearchContainer } from '../utils/Styles';
import styled from 'styled-components';
import CtaButton from '../components/CtaButton';
import CustomText from '../components/CustomText';
import { Alert } from 'react-native';

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: () => <HeaderLogo source={require('../assets/images/small-logo-github.png')}/>,
        headerStyle: {
            height: 100,
            shadowColor: 'transparent',
            backgroundColor: "#F2F2F2",
            borderBottomWidth: 0,
            fontSize: 17
        },
        headerLeft: null
    })

    render() {
        return (
        <MainContainer>
            <CustomText>
                <ScreenTitleLabel>GitHubify</ScreenTitleLabel>
            </CustomText>
            <SearchContainer>
                <GenericInput placeholder="Nombre del repositorio" onChangeText={
                    query => this.setState({ query })
                }
                value={this.state.query} />
                <CtaButton title="Buscar" nav={() => {
                    if(this.state.query == ''){
                        Alert.alert("Githubfy", "Por favor escribe el nombre del repositorio a buscar", [
                            { text: "Aceptar" }
                        ]);
                    }else {
                        this.props.navigation.push('ListReposScreen', {
                            query: this.state.query
                        })
                    }
                 }} 
            />
            </SearchContainer>
        </MainContainer>
        )
    }
}

export default HomeScreen;

const HeaderLogo = styled.Image`
  width: 50%;
  height: 50%;
  resizeMode: center;
`;

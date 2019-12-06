import React from 'react';
import { MainContainer, GenericInput, ScreenTitleLabel, SearchContainer } from '../utils/Styles';
import styled from 'styled-components';
import CtaButton from '../components/CtaButton';
import CustomText from '../components/CustomText';

class HomeScreen extends React.Component {
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
                <GenericInput
                    placeholder="Nombre del repositorio"/>
                <CtaButton title="Buscar"/>
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

const Title = styled.Text`
  fontSize: 40px;
`;
import React from 'react';
import { CardContainer, CardDescription, CardTitle, CardLanguage } from "../utils/Styles";
import { TouchableOpacity, Alert } from "react-native";
import PropTypes from 'prop-types';
import ModalView from '../screens/Modal';

class Repo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        }
    };

    _renderRepoItem = ({item}) => {
        Alert.alert(item.key);
    }

    render(){
        const { name, description, language } = this.props;
        return(
                <CardContainer>
                    <CardTitle>{name}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    <CardLanguage>{language}</CardLanguage>
                </CardContainer>
        );
    }
}

export default Repo;

Repo.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string
  };
  
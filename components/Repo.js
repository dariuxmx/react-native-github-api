import React from 'react';
import { CardContainer, CardDescription, CardTitle, CardLanguage, CardImage } from "../utils/Styles";
import { Image } from 'react-native';
import PropTypes from 'prop-types';

class Repo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false
        }
    };

    render(){
        const { name, thumb, description, language } = this.props;
        return(
                <CardContainer>
                    <CardTitle>{name}</CardTitle>
                        <CardImage source={{uri:thumb}}/>
                        <CardDescription>{description}</CardDescription>
                    <CardLanguage>{language}</CardLanguage>
                </CardContainer>
        );
    }
}

export default Repo;

Repo.propTypes = {
    name: PropTypes.string.isRequired,
    thumb: PropTypes.string,
    description: PropTypes.string.isRequired,
    language: PropTypes.string
  };
  
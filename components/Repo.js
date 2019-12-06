import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, CardDescription, CardTitle, CardLanguage } from "../utils/Styles";

export default class Repo extends React.Component {
    render(){
        const { name, description, language } = this.props;
        return (
        <CardContainer>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
        <CardLanguage>{language}</CardLanguage>
        </CardContainer>
        );
    }
}

Repo.protoTypes = {
    name: PropTypes.string.isRequired,
};
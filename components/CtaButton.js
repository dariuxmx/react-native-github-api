import React from 'react';
import PropTypes from 'prop-types';
import { CtaButtonView, CtaTextView } from '../utils/Styles';

export default class CtaButton extends React.Component {
    render(){
        const { title, nav } = this.props;
        return(
            <CtaButtonView>
                <CtaTextView onPress={nav}>{title}</CtaTextView> 
            </CtaButtonView>
        );
    }
}

CtaButton.protoTypes = {
    title: PropTypes.string.isRequired,
    nab: PropTypes.func
};
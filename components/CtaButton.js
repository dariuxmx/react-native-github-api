import React from 'react';
import { CtaButtonView, CtaTextView } from '../utils/Styles';

const CtaButton = props => (
    <CtaButtonView>
        <CtaTextView onPress={props.nav}>{props.title}</CtaTextView> 
    </CtaButtonView>
)

export default CtaButton;

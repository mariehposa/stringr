import React from 'react';
import help from '../img/up-arrow.svg'
import { StyledDiv, StyledP, StyledImg } from './styles';

export default function Help() {
    return(
        <StyledDiv>
            <StyledImg src={help} />
            <StyledP>Help</StyledP>
        </StyledDiv>
    )
}
import React from 'react';
import { StyledAll, StyledDiv } from '../what_is_stringr/styles';

export default function Faq() {
    return (
        <StyledAll>
            <StyledDiv>
                <StyledNav to="">What is Stringr?</StyledNav>
                <StyledNav to="">I uploaded video to the Stringr platform. When will I get paid? </StyledNav>
                <StyledNav to="">How do I use the Stringr app? </StyledNav>
                <StyledNav to="">Do I need to use my phone to take video? </StyledNav>
                <StyledNav to="">How much do people typically get paid per video? </StyledNav>
                <StyledNav to="">Will I get a 1099 tax form from Stringr? </StyledNav>
                <StyledNav to="">Who are Stringr’s customers? </StyledNav>
                <StyledNav to="">I need to change my email. Where do I do that? </StyledNav>
            </StyledDiv>
            <StyledDiv2></StyledDiv2>
        </StyledAll>
    )
}
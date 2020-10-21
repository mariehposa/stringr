import React from 'react';
import { StyledAll, StyledDiv, StyledDiv1, StyledDiv2, StyledNav, StyledA } from './styles';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';

export default function Faq() {
    return (
        <StyledAll>
            <StyledDiv>
                <p>© 2019 STRINGR, Inc. All rights reserved</p>
            </StyledDiv>

            <StyledDiv1>
                <StyledA  title="facebook" href="https://www.facebook.com/contactstringr" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="stringr facebook" />
                </StyledA>
                <StyledA  title="gmail profile" href="https://twitter.com/ContactStringr" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="stringr twitter" />
                </StyledA>
            </StyledDiv1>

            <StyledDiv2>
                <StyledNav>Terms of service</StyledNav>
                <StyledNav>Privacy policy</StyledNav>
                <StyledNav>cookie preferences</StyledNav>
                <StyledNav>contact us</StyledNav>
            </StyledDiv2>
        </StyledAll>
    )
}
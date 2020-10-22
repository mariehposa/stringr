import React from 'react';
import { StyledAll, StyledDiv, StyledNav, StyledA, StyledDiv1 } from './styles';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import TopScroll from '../top_scroll/top_scroll';

export default function Footer() {
    return (
        <StyledAll>
            <StyledDiv>
                <p>© 2019 STRINGR, Inc. All rights reserved</p>
            </StyledDiv>

            <StyledDiv1>
                <StyledNav to="/">Terms of service</StyledNav>
                <StyledNav to="/">Privacy policy</StyledNav>
                <StyledNav to="/">cookie preferences</StyledNav>
                <StyledNav to="/">contact us</StyledNav>
            </StyledDiv1>

            <div>
                <StyledA  title="facebook" href="https://www.facebook.com/contactstringr" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="stringr facebook" />
                </StyledA>
                <StyledA  title="gmail profile" href="https://twitter.com/ContactStringr" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="stringr twitter" />
                </StyledA>
            </div>
            <TopScroll />
        </StyledAll>
    )
}
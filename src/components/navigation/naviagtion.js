import React from "react";
import stringr from '../img/stringr.svg';
import {StyledNav, StyledLink} from './styles';

export default function Navigation() {
    function navigate(elementId) {
        let offsetTop = document.getElementById(elementId).offsetTop;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: "smooth"
        });
    }
  
  return (
    <StyledNav>
        <div>
            <a exact to="/"><img src={stringr} alt="stringr" /></a>
        </div>
        <div>
            <StyledLink onClick={() => navigate("what_is_stringr")} to="/what_is_stringr">
                what is stringr
            </StyledLink>
            <StyledLink onClick={() => navigate("how_it_works")} to="how_it_works">
                How it works
            </StyledLink>
            <StyledLink onClick={() => navigate("Learn_more")} to="/Learn_more">
                Learn more
            </StyledLink>
            <StyledLink onClick={() => navigate("about_us")} to="/about_us">
                About us
            </StyledLink>
            <StyledLink onClick={() => navigate("faq")} to="/faq">
                Faq
            </StyledLink>
        </div>
        <div>
            <StyledLink> Videographers </StyledLink>
            <StyledLink> Login </StyledLink>
        </div>
    </StyledNav>
  );
}
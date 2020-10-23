import React from "react";
import { NavLink } from "react-router-dom";
import stringr from '../img/stringr.svg';
import {StyledNav, StyledLink1, StyledLink2, StyledLogo, StyledDiv} from './styles';
import { slide as Menu } from 'react-burger-menu';

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
            <NavLink to="/">
                <StyledLogo src={stringr} alt="stringr" />
            </NavLink>
        </div>
        <StyledDiv>
            <div>
                <StyledLink1 onClick={() => navigate("what_is_stringr")} to="/what_is_stringr">
                    what is stringr?
                </StyledLink1>
                <StyledLink1 onClick={() => navigate("how_it_works")} to="how_it_works">
                    How it works
                </StyledLink1>
                <StyledLink1 onClick={() => navigate("Learn_more")} to="/Learn_more">
                    Learn more
                </StyledLink1>
                <StyledLink1 onClick={() => navigate("about_us")} to="/about_us">
                    About us
                </StyledLink1>
                <StyledLink1 onClick={() => navigate("faq")} to="/faq">
                    Faq
                </StyledLink1>
            </div>
            <div>
                <StyledLink2 to="/videographers"> Videographers </StyledLink2>
                <StyledLink2 to="/login"> Log in </StyledLink2>
            </div>
        </StyledDiv>
    </StyledNav>
  );
}
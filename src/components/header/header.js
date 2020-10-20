import React from 'react';
import ReactPlayer from 'react-player';
import '../../App.css';
import downArrow from '../img/down-arrow.svg';
import {StyledDiv, StyledNav, StyledH, StyledP, StyledButton, StyledImg} from './styles';

export default function Header() {
    return (
        <div>
            <StyledDiv>
                <StyledH>Video of anything. anywhere.</StyledH>
                <StyledP> Stringr has a network of over 125,000 videographers to get you the footage you want, when you need it.</StyledP>
                <StyledButton>Learn more</StyledButton>
                <StyledNav to="/what_is_stringr">
                    <StyledImg src={downArrow} alt="what is stringr" />
                </StyledNav>
            </StyledDiv>
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width="100%"
                height="90vh"
            />
        </div>
    )
}
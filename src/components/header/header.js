import React from 'react';
import ReactPlayer from 'react-player';
import '../../App.css';
import downArrow from '../img/down-arrow.svg';
import { NavLink } from "react-router-dom";
import {StyledDiv, StyledH, StyledP, StyledButton, StyledImg, StyledAll} from './styles';

export default function Header() {
    return (
        <StyledAll>
            <StyledDiv>
                <StyledH>Video of anything. anywhere.</StyledH>
                <StyledP> Stringr has a network of over 125,000 videographers to get you the footage you want, when you need it.</StyledP>
                <StyledButton>Learn more</StyledButton>
                <NavLink to="/what_is_stringr">
                    <StyledImg src={downArrow} alt="what is stringr" />
                </NavLink>
            </StyledDiv>
            <ReactPlayer
                className='react-player'
                url='https://static.stringr.com/media/heros/hero-19v2.1.mp4'
                width="100%"
                height="100%"
                muted='true'
                playing="true"
                loop="true"
            />
        </StyledAll>
    )
}
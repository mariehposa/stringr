import React from "react";
import customers from '../img/customers.png';
import {StyledAll, StyledH, StyledP, StyledDiv, StyledImg, StyledNav} from './styles';

export default function WhatIsStringr() {
  return (
    <StyledAll>
      <StyledDiv>
        <StyledH>What is stringr</StyledH>
        <StyledP>
          Stringr is a video platform that allows customers to source, edit,
          publish and monetize video. Stringr has more than 100,000
          videographers who respond to custom video requests in near real time.
          Drop a pin on a map and ask for the video you want. From there, access
          a full suite of video capabilities that take you from concept, to
          creation to making money.
        </StyledP>
        <StyledP>Read about how customers use Stringr <StyledNav to="https://static.stringr.com/Stringr+Whitepaper+March+2019+NCN.pdf">here</StyledNav>.</StyledP>
      </StyledDiv>
      <div>
          <StyledImg src={customers} alt="stringr customers" />
      </div>
    </StyledAll>
  );
}

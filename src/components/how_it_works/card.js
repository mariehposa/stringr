import React from "react";
import { StyledDiv, StyledH, StyledImg, StyledP } from "./styles";

export default function Card({data}) {
  return (
      <StyledDiv>
        <StyledImg src= {data.img} alt="how stringr works"/>
        <StyledH>{data.title}</StyledH>
        <StyledP>Status: {data.subtitle}</StyledP>
      </StyledDiv>
    );
}
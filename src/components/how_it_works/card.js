import React from "react";
import { StyledDiv, StyledH3, StyledImg, StyledP } from "./styles";

export default function Card({data}) {
  return (
      <StyledDiv>
        <StyledImg src= {data.img} alt="how stringr works"/>
        <StyledH3>{data.title}</StyledH3>
        <StyledP>Status: {data.subtitle}</StyledP>
      </StyledDiv>
    );
}
import React from "react";
import { StyledDiv, StyledH, StyledImg } from "../what_is_stringr/styles";

export default function AboutUs() {
  return (
    <StyledAll>
      <StyledDiv>
          <StyledH>In the press</StyledH>
          <div>
              <StyledImg src={} alt="" />
              <StyledImg src={} alt="" />
              <StyledImg src={} alt="" />
              <StyledImg src={} alt="" />
              <StyledImg src={} alt="" />
          </div>
      </StyledDiv>

      <StyledDiv>
        <StyledH>About us</StyledH>
        <StyledP>
          Stringr was started by two friends – one a former news producer and
          the other a product manager and consultant who started his first
          company in high school. Lindsay Stewart spent over 10 years in TV news
          producing segments for ABC, NBC, CBS, Fox News and Bloomberg, among
          others. That’s when the idea for Stringr came to her. Brian McNeill
          spent over 15 years in product management and management consulting
          which are fancy words for – he’s a business guy. Brian had the idea
          for his first company in high school and launched SureSize shortly
          after that. 15 years of big company experience made him yearn to go
          back to building a company from scratch.
        </StyledP>
        <div>
            <StyledH3>Offices in: New York, London, Los Angeles</StyledH3>
            <StyledH3>Videographers: Everywhere</StyledH3>
        </div>
      </StyledDiv>
    </StyledAll>
  );
}

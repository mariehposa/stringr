import React from 'react';
import { InnerDiv, StyledForm, StyledLabel, StyledSpan, StyledField, StyledButton } from './styles';
import { StyledAll, StyledDiv, StyledH1 } from "../how_it_works/styles";

export default function LearnMore() {
    return (
        <StyledAll>
            <StyledH1>Learn more</StyledH1>

            <StyledDiv>
                <StyledForm>
                    <InnerDiv>
                        <StyledLabel>
                            <StyledSpan>*</StyledSpan>
                        </StyledLabel>
                        <StyledField>Name</StyledField>
                    </InnerDiv>
                    <InnerDiv>
                        <StyledLabel>
                            <StyledSpan>*</StyledSpan>
                        </StyledLabel>
                        <StyledField>Company</StyledField>
                    </InnerDiv>
                    <InnerDiv>
                        <StyledLabel>
                            <StyledSpan>*</StyledSpan>
                        </StyledLabel>
                        <StyledField>Email</StyledField>
                    </InnerDiv>
                    <StyledButton>Submit Request</StyledButton>
                </StyledForm>
            </StyledDiv>
        </StyledAll>
    )
}
import React from 'react';
import { InnerDiv } from '../faq/styles';
import { StyledAll, StyledDiv, InnerDiv, StyledForm, StyledLabel, StyledSpan, StyledField } from './styles';

export default function LearnMore() {
    return (
        <StyledAll>
            <StyledP>Learn more</StyledP>

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
                </StyledForm>
            </StyledDiv>
        </StyledAll>
    )
}
import React from 'react';
import { StyledAll, StyledDiv, InnerDiv, StyledLabel, StyledSpan, StyledField, StyledButton } from './styles';
import { StyledH1 } from "../how_it_works/styles";
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const url = ''

const initialValue = {
    name: '',
    company: '',
    email: ''
}

export default function LearnMore() {
    const onSubmitButton = ( formValues, action) => {

        axios.post(url, {
            name: formValues.name,
            company: formValues.company,
            email: formValues.email
        })
        .then(res => {
            // console.log(res.data)
        })
        .catch(error => {
            // console.log(error)
        })
        action.resetForm()
    }

    return (
        <StyledAll>
            <StyledH1>Learn more</StyledH1>

            <StyledDiv>
                <form name="myForm" method="post">
                    <InnerDiv>
                        <StyledLabel>
                            Name
                            <StyledSpan>*</StyledSpan>
                        </StyledLabel>
                        <StyledField type="text" id="fname" name="errMsg" validator={requiredValidator}/>
                    </InnerDiv>
                    <InnerDiv>
                        <StyledLabel>
                            Company
                        </StyledLabel>
                        <StyledField type="text" id="fname" />
                    </InnerDiv>
                    <InnerDiv>
                        <StyledLabel>
                            Email
                            <StyledSpan>*</StyledSpan>
                        </StyledLabel>
                        <StyledField type="email" id="fname" name="errMsg" validator={requiredValidator} />
                    </InnerDiv>
                    <StyledButton type="submit">Submit Request</StyledButton>
                </form>
            </StyledDiv>
        </StyledAll>
    )
}
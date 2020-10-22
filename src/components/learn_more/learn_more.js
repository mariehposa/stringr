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

const validateValue = (formValue) => {
    const error = {};

    if (!formValue.name) {
        error.name = 'name is required!';
    }

    if (!formValue.email) {
        error.email = 'email is required!'
    }
}

const validation = yup.object().shape({
    name: yup.string().required('input correct name!'),
    email: yup.string().required('input correct email!'),
})

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
                <Formik 
                    initialValues={initialValue}
                    validate={validateValue}
                    validationSchema={validation}
                    onSubmit={onSubmitButton}
                    render={props => {
                        return (
                            <Form>
                                <InnerDiv>
                                    <StyledLabel>
                                        Name
                                        <StyledSpan>*</StyledSpan>
                                    </StyledLabel>
                                    <StyledField name="name" type="text" />
                                    <ErrorMessage name="name" component="p" />
                                </InnerDiv>
                                <InnerDiv>
                                    <StyledLabel>
                                        Company
                                    </StyledLabel>
                                    <StyledField name="company" type="text" />
                                </InnerDiv>
                                <InnerDiv>
                                    <StyledLabel>
                                        Email
                                        <StyledSpan>*</StyledSpan>
                                    </StyledLabel>
                                    <StyledField tname="email" type="email" />
                                    <ErrorMessage name="email" component="p" />
                                </InnerDiv>
                                <StyledButton type="submit">Submit Request</StyledButton>
                            </Form>
                        )
                    }}
                />
            </StyledDiv>
        </StyledAll>
    )
}
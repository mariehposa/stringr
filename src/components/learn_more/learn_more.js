import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { StyledH1 } from "../how_it_works/styles";
import { StyledAll, StyledDiv, InnerDiv, StyledLabel, StyledSpan, StyledField, StyledButton,StyledError } from './styles';

const url = ''

const initialValue = {
    name: '',
    company: '',
    email: ''
}

const validateValue = (formValue) => {
    const error = {};

    if (!formValue.name) {
        error.name = 'This is a required field!';
    }

    if (!formValue.email) {
        error.email = 'This is a required field!'
    }
}

const validation = yup.object().shape({
    name: yup.string().required('This is a required field!'),
    email: yup.string().required('This is a required field!'),
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
                                </InnerDiv>
                                <StyledError name="name" component="p" />

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
                                    <StyledField name="email" type="email" />
                                </InnerDiv>
                                <StyledError name="email" component="p" />

                                <StyledButton type="submit">Submit Request</StyledButton>
                            </Form>
                        )
                    }}
                />
            </StyledDiv>
        </StyledAll>
    )
}
import styled from "styled-components";
import { ErrorMessage, Field } from 'formik';

export const StyledAll = styled.div`
    display: flex;
    justify-content: space-between; 
    padding: 80px 0;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    margin: 0 150px;
    font-family: "Open Sans",Arial,sans-serif;
`

export const StyledDiv = styled.div`
    width: 45%;
`

export const InnerDiv = styled.div`
    display: flex;
    margin-bottom: 20px;
`

export const StyledLabel = styled.label`
    font-weight: 500;
    width: 20%;
`

export const StyledSpan = styled.span`
    font-weight: 400;
    color: #e80000;
    margin-left: 3px;
`

export const StyledField = styled(Field)`
    width: 100%;
    margin-left: 10px;
    border: 1px solid #dadada;
    box-shadow: inset 0px 12px 5px -14px rgba(0,0,0,.35);
    color: #3e3e3e;
    height: 23px;

    &:focus {
        border-color: #2d3940;
    }

    &:active {
        border: 1px solid #666;
    }
`

export const StyledButton = styled.button`
    float: right;
    background: #cd0c0c;
    color: #fff;
    border: 0;
    padding: 10px 30px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    text-shadow: none;
    border-radius: 3px;
    margin-top: 10px;

    &:hover {
        background-color: #ef4a34;
        transition: background-color .3s ease;
    }
`

export const StyledError = styled(ErrorMessage)`
    color: #e80000;
    text-align: center;
    margin-bottom: 20px;
`
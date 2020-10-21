import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAll = styled.div`
    display: flex;
    margin: 100px 150px;
    border-top: 1px solid #ccc;
    padding-top: 50px;
    justify-content: space-between;
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
`;

export const StyledP = styled.p`
    color: #0e0e0e;
    font-weight: 500;
    line-height: 25px;
    font-family: "Open Sans",Arial,sans-serif;
    font-size: 1.1em;
    transition: all 1s ease-out;
`;

export const InnerDiv = styled.div`
    width: 55%;
    border-left: 1px solid #ccc;
    padding-left: 40px;
`;

export const StyledNav = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    color: #666;
    padding: 10px;
    padding-left: 0;

    &:hover {
        color: #ef4a34;
        transition: color .3s ease;
    }

    &:active {
        color: #333;
    }
`;
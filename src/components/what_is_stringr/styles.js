import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAll = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 200px 150px;
    font-family: "Open Sans",Arial,sans-serif;

    @media (max-width: 500px)  {
        margin: 50px 50px;
        flex-direction: column;
    }
`;

export const StyledDiv = styled.div`
    width: 50%;

    @media (max-width: 500px)  {
        width: 100%;
    }
`;

export const StyledH = styled.h1`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2.2rem;

    @media (max-width: 500px)  {
        font-size: 2rem;
        padding: 0 100px;
        text-align: center;
    }
`;

export const StyledP = styled.p`
    font-weight: 500;
    line-height: 1.6em;

    @media (max-width: 500px)  {
        font-size: 1em;
        line-height: 30px;
    }
`;

export const StyledNav = styled(NavLink)`
    color: #cd0c0c;
    font-weight: 700;
    text-decoration: none;

    &:hover {
        color: #ef4a34;
        transition: color .3s ease;
    }
`;

export const StyledImg = styled.img`
    width: 450px;

    @media (max-width: 500px)  {
        width: 100%;
    }
`;
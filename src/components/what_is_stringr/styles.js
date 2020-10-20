import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAll = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 200px 0;
`;

export const StyledDiv = styled.div`
    width: 43%;
`;

export const StyledH = styled.h1`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2.2rem;
`;

export const StyledP = styled.p`
    font-weight: 500;
    line-height: 1.6em;
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
    width: 500px;
`;
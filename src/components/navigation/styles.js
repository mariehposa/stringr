import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
    background: #0e0e0e;
    padding: 15px 0;
    box-shadow: 0 1px 1px rgba(0,0,0,.3);
`;

export const StyledLogo = styled.img`
    width: 80px;
`;

export const StyledDiv = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const StyledLink1 = styled(NavLink)`
    margin-left: 1.2rem;
    text-decoration: none;
    font-weight: 300;
    font-size: 15px;
    text-transform: uppercase;
    color: #f4f4f4;

    &:hover {
        opacity: 0.7;
        transition: all 0.5s ease-in-out;
    }
`;

export const StyledLink2 = styled(NavLink)`
    text-decoration: none;
    margin-left: 1.2rem;
    font-weight: 300;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 700;
    border-left: 1px solid rgba(255,255,255,.2);
    padding-left: 20px;
    color: #f4f4f4;

    &:hover {
        opacity: 0.7;
        transition: all 0.5s ease-in-out;
    }
`;


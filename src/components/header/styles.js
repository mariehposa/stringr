import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledDiv = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: wheat;
    top: 40%;
    bottom: 1%;
`;

export const StyledH = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;
    font-size: 3.4rem;
`;

export const StyledP = styled.p`
    text-align: center;
    color: #fff;
    font-weight: 300;
    line-height: 1.4;
    font-size: 1.8rem;
    width: 55%;
    margin-top: -10px;
    line-height: 50px;
`;

export const StyledNav = styled(NavLink)`
    
`;

export const StyledButton = styled.button`
    background: #cd0c0c;
    color: #fff;
    border: 0;
    padding: 10px 50px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 600;
    text-shadow: none;
    border-radius: 3px;

    &:hover {
        color: #ef4a34;
        transition: color .3s ease;
    }
`;

export const StyledImg = styled.img`
    width: 20px;
    margin-top: 20px;
`;
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAll = styled.div`
    text-align: center;
    background-color: #050505;
    padding: 100px 0;
    font-family: "Open Sans",Arial,sans-serif;
`

export const StyledDiv = styled.div`
    border-right: 1px solid #777;
    background: #fff;
    font-size: 18px;
    width: 380px;
    color: #777;
    text-transform: uppercase;
    margin: auto;
`

export const StyledNav = styled(NavLink)`
    color: #777;
    font-size: .8rem;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0;
    margin: 5px;
    padding-right: 10px;
    border-right: 1px solid #777;
    text-decoration: none;
`

export const StyledDiv1 = styled.div`
    margin: 20px 0;
`

export const StyledA = styled.a`
    margin: 10px 5px;
`
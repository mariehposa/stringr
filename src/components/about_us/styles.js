import styled from "styled-components";

export const StyledAll = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #050505;
    padding: 100px 80px;
    color: #fff;
    font-family: "Open Sans",Arial,sans-serif;
`;

export const StyledDiv = styled.div`
    width: 40%;
    
    > div {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const StyledImg = styled.img`
    width: 110px;
    margin-right: 20px;
    margin-top: 20px;
`;

export const StyledH3 = styled.h3`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    line-height: 10px;

    :first-child {
        margin-top: 30px;
    }
`;

export const StyledDiv2 = styled.div`
    width: 45%;
`;
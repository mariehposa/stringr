import styled from "styled-components";

export const StyledAll = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: #050505;
    padding: 100px 80px;
    color: #fff;
    font-family: "Open Sans",Arial,sans-serif;

    @media (max-width: 500px)  {
        flex-direction: column;
        padding: 50px 30px;
    }
`;

export const StyledDiv = styled.div`
    width: 40%;
    
    > div {
        display: flex;
        flex-wrap: wrap;
    }

    @media (max-width: 500px)  {
        width: 100%;
        
        h1 {
            padding: 0 !important;
        }
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

    @media (max-width: 500px)  {
        line-height: 20px;
    }
`;

export const StyledDiv2 = styled.div`
    width: 45%;

    @media (max-width: 500px)  {
        width: 100%;

        h1 {
            padding: 0 !important;
        }
    }
`;
import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 50px;
    background-color: #bf3434;
    border-radius: 100%;
    height: 7vh;
    float: right;
    margin-right: 10px;
    cursor: pointer;
    margin-top: -100px;

    @media (max-width: 500px)  {
        margin-top: -50px;
    }
`;

export const StyledImg = styled.img`
    width: 60px;
    margin-top: -5px;
    margin-left: -5px;  
`;
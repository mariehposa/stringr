import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 100px;
    background-color: #bf3434;
    height: 50px;
    border-radius: 999rem;
    display: flex;
    margin-right: 20px;
    float: right;
    cursor: pointer;

    @media (max-width: 500px)  {
        width: 50px;
        margin-top: 40px;
        margin-right: 0px;
    }
`;

export const StyledImg = styled.img`
    width: 60px;

    @media (max-width: 500px)  {
        margin-left: -4px;
    }
`;

export const StyledP = styled.p`
    color: #fff;
    font-weight: 600;
    margin-left: -15px;

    @media (max-width: 500px)  {
        display: none;
    }
`;
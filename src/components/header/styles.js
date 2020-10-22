import styled from "styled-components";

export const StyledAll = styled.div`
    margin-top: 90px;

    @media (max-width: 500px)  {
        margin-top: 105px;
    }
`;

export const StyledDiv = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    top: 45%;
    bottom: 1%;
`;

export const StyledH = styled.h1`
    color: #fff;
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;
    font-size: 3.4rem;

    @media (max-width: 500px)  {
        font-size: 3rem;
        line-height: 60px;
    }
`;

export const StyledP = styled.p`
    text-align: center;
    color: #fff;
    font-weight: 300;
    font-size: 1.8rem;
    width: 55%;
    margin-top: -10px;
    line-height: 50px;

    @media (max-width: 500px)  {
        font-size: 1.7rem;
        width: 65%;
        line-height: 30px;
    }
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
        background-color: #ef4a34;
        transition: background-color .3s ease;
    }

    @media (max-width: 500px)  {
        margin-top: 20px;
    }
`;

export const StyledImg = styled.img`
    width: 60px;
    margin-top: 20px;

    @media (max-width: 500px)  {
        margin-top: 0;
    }
`;
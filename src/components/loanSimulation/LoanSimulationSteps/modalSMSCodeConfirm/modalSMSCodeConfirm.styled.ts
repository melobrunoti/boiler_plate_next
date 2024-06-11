import styled from "styled-components";

export const DivInputs = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 1rem;


    input{
        width: 2.5rem;
        height: 2.5rem;
        text-align: center;
    }

` 

export const DivTexts = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;


    p{
        font-size: 0.88rem;
        font-weight: 300;
        line-height: 1.07rem;
    }

    span{
        font-size: 0.88rem;
        font-weight: 300;
        line-height: 1.07rem;
    }

`

export const StyledLink = styled.a`
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.07rem;
    color:black;
    text-decoration: none;
`
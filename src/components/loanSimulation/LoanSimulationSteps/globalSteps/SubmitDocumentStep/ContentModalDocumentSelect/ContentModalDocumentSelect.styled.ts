import { Button } from "@mui/material";
import styled from "styled-components";


export const Content = styled.div`
    width: 100%;
    height: 100%;

` 

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;

    h4{
        font-size: 0.8rem;
    }

    p{ 
        font-size: 0.75rem;
    }

`

export const BodyContent = styled.div`

    margin-top: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 0.7rem;
` 

export const ButtonChoice = styled.button`
    width: 100%;
    line-height: 0;
    padding: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    border: 1px solid var(--tertiary-text-color);
    border-radius: 0.5rem;
    outline: none;
    font-size: 0.75rem;


` 
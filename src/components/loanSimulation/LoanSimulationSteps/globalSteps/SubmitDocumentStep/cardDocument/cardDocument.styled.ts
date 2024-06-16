import { green } from "@mui/material/colors";
import styled from "styled-components";


interface IStyledProps { 
    status: string;
}

export const CardBody = styled.div`
    width: 100%;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--tertiary-text-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
` 
export const HeaderCard = styled.div`
    h3{ 
        font-size: 0.8rem;
    }
` 
export const BodyCard = styled.div`
    width: 80%;

    P{ 
        font-size: 0.6rem;
    }

` 
export const FooterCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 0.6rem;
` 
export const StatusDiv = styled.div<IStyledProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.status === "Pendente" ? "red" : "green" };
    font-size: 0.6rem;

` 

export const PhotoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
`
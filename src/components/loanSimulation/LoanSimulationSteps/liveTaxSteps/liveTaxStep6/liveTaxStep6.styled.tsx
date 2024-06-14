import styled from "styled-components";

export const ContentLiveTaxStep6 = styled.div`
    height: 100%;
    h2{ 
        font-size: 18px;
        font-weight: 600;
    }

` 
export const DivContent = styled.div`
width: 100%;
height: 90% ;
display: flex;
flex-direction: column;
justify-content: space-between;

`

export const DivCardsStep6 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100% ;
    gap: 1rem;
    `

export const CardStep6  = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    border: 1px solid  var(--primary-bg-color);
    border-radius: 12px;
    padding: 1rem 0;
    gap: 0.5rem;
    p:nth-child(1){ 
        font-weight: 300;
        font-size: 1rem;
    }
` 

export const BigSpan = styled.div`
    font-weight: 600;
    font-size: 1.3rem;

`
export const InLineTextDiv = styled.div`

    display: flex;
    gap: 0.2rem;
    span:nth-child(1){
        font-size: 1.25rem;
        font-weight: 400;
    } 

`

export const InLineTextDivWhitGap = styled.div`

    display: flex;
    align-items: end;
    gap: 1rem;
    span:nth-child(2){
        font-size: 1.25rem;
        font-weight: 300;
    } 


` 
export const DivLink = styled.div`
    width: 100%;
    button{ 
        font-size: 0.8rem;
        background-color: transparent;
        border: none;
        outline: none;
        color: var(--primary-bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: underline;
    }
`

export const DivButtons = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem 0;

` 
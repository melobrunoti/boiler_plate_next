import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
` 
export const ContentTitle = styled.div`
    h2{ 
        font-weight: 600;
        font-size: 1rem ;
        line-height: 1.22rem;
        padding-bottom: 1rem;
    }

` 
export const CardsContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

` 

export const ContractCard = styled.div`
    background-color: var(--Backgroud-grey-1);
    border: 1px solid var(--tertiary-text-color);
    padding: 1rem;
    width: 100%;
    border-radius: 0.63rem;
    display: flex;
    justify-content: space-between;
    align-items: center ;
    gap: 1rem;

` 

export const ContractValues = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 70%;


    p{
        font-size: 0.5rem;
        font-weight:400;
    }
    span{
        font-size: 0.8rem;
        font-weight: 600;
        text-overflow: ellipsis;
        overflow: hidden;

    }

`

export const ContractDate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    
    span{
        font-size: 0.63rem;
        font-weight: 300;
    }
`

export const DivContracts = styled.div`

    width: 100%;
    height: 100%;
    overflow-Y: scroll;
    display: flex;
    flex-direction: column ;
    gap: 1rem;

` 
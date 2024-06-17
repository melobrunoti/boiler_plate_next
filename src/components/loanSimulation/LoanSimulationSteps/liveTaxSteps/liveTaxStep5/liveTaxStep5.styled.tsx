import styled from "styled-components";

export const ContentLiveTaxStep5 = styled.div`
    height: 100%;
    h2{ 
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
    }

` 

export const HeaderStep5 = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    h3{
        font-weight: 300;
        font-size: 0.8rem;
        line-height: 1.7rem;
    }

    h5{ 
        font-weight: 300;
        font-size: 0.8rem;
        line-height: 1.7rem;
    }

` 

export const TotalAmountDiv = styled.div`
    display: flex;
    width: 100% ;
    justify-content: center;
    padding: 0.5rem;

    span{ 
        font-weight: 300;
        font-size: 0.8rem;
        line-height: 1.7rem;
    }

    h4{ 
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 1.52rem;
    }

` 

export const BodyStep5 = styled.div`
    margin-top: 1rem;
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

` 
export const CardInstallment = styled.button`

    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid var(--tertiary-text-color);
    border-radius: 0.5rem;
    background-color: transparent;
    outline: none;

    &:focus{ 
        border: 1px solid var(--primary-bg-color);
    }

    
    

    span{
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.38rem;
    }

    span:nth-child(2){
        font-weight: 300;

    }



` 
import styled from "styled-components";


export const ContentCard = styled.div`
background-color: var(--Backgroud-grey-1);
border: 1px solid var(--tertiary-text-color);
padding: 1rem;
width: 100%;
border-radius: 0.63rem;

`

export const DivTitle = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid var(--tertiary-text-color);
    h4{ 
        font-weight: 600;
        font-size: 1.13rem;
        line-height: 1.3rem ;
    }
`

export const DivContent  = styled.div` 
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem ;
    padding-top: 1rem;

` 

export const ContentIten = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{ 
        font-weight: 400;
        font-size: 0.88rem;
    }

    span{ 
        font-weight: 600;
        font-size: 0.88rem;
    }
`

export const CardAndOptions = styled.div`
    height: auto;
    transition: height 0.5s ease;
    width: 100%;
`
export const OptionsDiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem ;

`
export const ButtonOptions = styled.button`
  display: flex;
  outline: none;
  border: none; 
  padding: 1.5rem 1rem;
  justify-content: space-between;
  border-bottom: 1px solid  var(--tertiary-text-color);
  background-color: transparent;
  width: 100%;
  align-items: center;
`
export const DivIconText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

`
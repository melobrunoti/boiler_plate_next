import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
` 

export const BodyContent = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ` 

export const DivContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`


export const DivButtons  = styled.div`
    padding: 2rem 0;
` 

export const ContentTop = styled.div`
    text-align: center;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    h2{ 
        padding: 2rem 2rem;

        font-size: 1.5rem;
        font-weight: 500;
    }
` 
export const ContentBotton = styled.div`
    text-align: center;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p{ 
        padding: 1rem 3rem;
        font-size: 1rem;
        font-weight: 400;
    }
    span {
        font-size: 0.75rem;
        font-weight: 400;
    }
` 
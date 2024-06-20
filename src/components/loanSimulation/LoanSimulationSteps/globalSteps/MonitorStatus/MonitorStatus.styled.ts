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
    padding: 1rem;
    justify-content: space-between;
`

export const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    margin-left: -1rem;

` 


export const DivButtons  = styled.div`
    padding: 2rem 0;
` 

export const ContentModaContact = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

` 
export const HeaderModal = styled.div`
text-align: center;
    h3{ 
        font-weight: 600;
        font-size: 1.13rem;
    }

` 
export const BodyModal = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;


    a:nth-child(2){ 
        border-left: 1px solid var(--tertiary-text-color);
        border-right: 1px solid var(--tertiary-text-color);
    }
` 

export const CardContact = styled.a`

    width: 100%;
    min-height: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 300;
    text-decoration: none;
    color: var(--secondary-text-color);
    p{ 
        font-size: 1rem;
        line-height: 2rem;
    }
` 
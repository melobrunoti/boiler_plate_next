import styled from "styled-components";

export const StyledContentModal =  styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;

    h2{ 
        color: black;
        padding: 0.5rem 0;
        font-size: 1.3rem;
    }

    p{ 
        color: var(--tertiary-text-color);
        text-align: center;
        padding: 1.5rem 0.5rem;
        font-size: 1rem;
    }



`
export const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 320,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    outline:'none',
    textTransform: 'none'
  };
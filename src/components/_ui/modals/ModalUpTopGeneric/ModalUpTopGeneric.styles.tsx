import styled from "styled-components";

interface StyledDivProps {
  active: boolean;
}

export const ContainerModal = styled.div<StyledDivProps>`
  width: 100vw;
  height: 92vh;
  z-index: 100;
  position: fixed;
  bottom: ${({ active }) => active ? '0' : '-100vh'};
  left: 0;
  background-color: white;
  border-radius: 2rem 0 0;
  transition: bottom 0.5s ease;
  padding: 2rem 1rem;
`;

export const HeaderModal = styled.div`
display: grid;
justify-content: center;
grid-template-columns: 1fr 2fr;


.buttonBack{
  grid-column: 1;
  color: black;
  justify-content: start;
}

img{ 
  grid-column: 2/3;
}

`
export const  DivBack = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
` 

export const BodyAndFoter = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
padding-bottom: 1rem;

` 

export const BodyModal = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;

  h2{ 
    padding: 3rem 0 1rem 0;
    font-size: 18px;
    line-height: 22px;
    font-weight:500;
  }

  p{ 
    font-weight: 300;
    font-size:12px;
    line-height: 15px;
  }

`


export const FooterButtons = styled.div` 
padding-bottom: 1rem;
` 

export const CheckAndButton = styled.div`

  display: flex;
  flex-direction: column;
  gap: 2rem;

` 

export const CheckAndLabel = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
font-weight: 400;
font-size: 11px;
line-height: 13px;
` 
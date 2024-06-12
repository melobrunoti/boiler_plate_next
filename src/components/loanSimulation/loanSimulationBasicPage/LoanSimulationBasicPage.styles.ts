import styled from 'styled-components';

interface LogoContainerProps {
  img: string;
}

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  background-color: blue;
  flex-direction: column;
  justify-content: space-between;
  background-color: #0062AC;
`;


export const LogoContainer = styled.div<LogoContainerProps>`
  background-image: url(${(props) => props.img});
  width: 50vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% 50%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  gap: 1rem;
  color: white;
  h1{
    font-size: 18px;
    font-weight:400;
    line-height:22px;
  }

  span{ 
    font-size: 20px;
    font-weight:600;
    line-height:26px;
  }
`;

export const ContentCenter = styled.div`
  display: flex;
  justify-content: center;

`  
export const LogoTop = styled.div<LogoContainerProps>`
  background-image: url(${(props) => props.img});
  background-repeat:no-repeat;
  background-position:center;
  height: 3.5rem;
  width: 100%;
` 
export const LoanSimulationContainer = styled.div`
  height: 100%;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1.5rem var(--box-padding ) var(--box-padding) var(--box-padding);
  background-color: #fff ;




  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 450px) {
    width: 100vw;
    height: 85vh;
    margin-bottom: 0;
    border-radius: 2rem 0 0 0;
    overflow-x: scroll;
  }
`;

export const DivTitle = styled.div`
  display: flex ;
  align-items: center;
  color: white ;
  h1 { 
    font-size: 16px;
    font-weight: 600;
    line-height: 19.5px;
    margin-left: 1rem;
  }

` 

 export const SpanStep = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #96D2BE;
    margin-left: 1rem;
 `


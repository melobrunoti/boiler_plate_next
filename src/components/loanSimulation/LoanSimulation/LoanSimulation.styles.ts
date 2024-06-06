import styled from 'styled-components';

interface LogoContainerProps {
  img: string;
}

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`;

export const WelcomeContentContainer = styled.div<LogoContainerProps>`
  background-color: #fff;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;



  @media (max-width: 768px) {
    background: linear-gradient(to bottom, transparent  0%,#46B1D8 95%),url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 60% 50%;
    width: 100vw;
  }
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
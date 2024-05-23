import styled from 'styled-components';

interface LogoContainerProps {
  img: string;
}

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`;

export const LoginFormContainer = styled.div<LogoContainerProps>`
  background-color: #fff;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 60% 50%;
    width: 100vw;
    align-items: flex-end;
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

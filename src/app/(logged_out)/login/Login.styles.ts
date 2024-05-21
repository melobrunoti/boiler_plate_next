import styled from 'styled-components';

interface LogoContainerProps {
  img: any;
}

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
`;

export const LogoContainer = styled.div<LogoContainerProps>`
  background-image: url(${(props) => props.img?.src});
  width: 50vw;
  background-repeat: no-repeat;

  background-size: cover;
  background-position: 60% 50%;
`;

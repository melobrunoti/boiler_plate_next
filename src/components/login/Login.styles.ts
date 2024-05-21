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

export const LoginFormContainer = styled.div`
  background-color: #fff;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResponsiveContainer = styled.div``;

export const FormContainer = styled.form`
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
`;

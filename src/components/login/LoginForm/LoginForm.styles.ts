import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 450px) {
    width: 100vw;
    margin-bottom: 0;
    border-radius: 2rem 0 0 0;
  }
`;

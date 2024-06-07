import styled from "styled-components";

interface StyledDivProps {
  active: boolean;
}

export const ContainerModal = styled.div<StyledDivProps>`
    width: 100vw;
    height: 92vh;
    z-index: 100;
    position: fixed;
    bottom: ${({ active }) => active ? '0' : '-100vh'}; /* Alterado para -100vh quando não estiver ativo */
    left: 0;
    background-color: #ff0000;
    border-radius: 2rem 0 0;
    transition: bottom 0.5s ease; /* Adicionando uma transição suave para a propriedade bottom */
`;
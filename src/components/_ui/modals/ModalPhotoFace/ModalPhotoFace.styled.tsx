import styled from "styled-components";

interface StyledDivProps {
    active: boolean;
  }

export const Content = styled.div<StyledDivProps>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    bottom: ${({ active }) => active == true ? '0' : '-1000vh'};
    transition: bottom 0.5s ease;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ` 

export const PhotoContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

` 

export const DivBlur = styled.div`
  width: 90%;
  height: 80%;
  background-color: transparent;
  outline: 15rem solid rgba(0,0,0,0.7);
  position: absolute;
  top: 10%;
  left: 5%;

` 

export const ButtonPhoto = styled.button`
  padding: 0;
  margin: 0;
  font-size: 2rem;
  line-height: 0;
  position: absolute;
  z-index: 10;
  bottom: 1rem;
  left: calc(50vw - 2rem);
  border-radius: 50%;
  border: none;
`

export const ButtonCancel = styled.button`

  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  line-height: 0;
  position: absolute;
  z-index: 10;
  left: 3rem;
  bottom: 2.5rem;
  border-radius: 50%;
  border: none;
  color: white;

` 


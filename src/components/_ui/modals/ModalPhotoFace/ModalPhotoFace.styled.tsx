import { url } from "inspector";
import styled from "styled-components";

interface StyledDivProps {
    active: boolean;
  }

interface IDivImage { 
  image: string| undefined;
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

export const TextsTopCan = styled.div`
  position: absolute;
  z-index: 20000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
  width: 80%;
  height: 10%;
  left: calc(50% - 40%);
  gap: 1rem;
  p{
    font-size: 75%;
  }

  span{ 
    font-size: 75%;
  }

` 

export const DivBlur = styled.div`
  width: 90%;
  height: 80%;
  background-color: transparent;
  outline: 15rem solid rgba(0,0,0,0.5);
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

export const PhotoViewContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

` 

export const TextsTopCanView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  p{ 
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4rem;
  }

`

export const DivImage = styled.div<IDivImage>`
  height: 100%;
  width: 100%;
  background-image: ${props => props.image ? `url(${props.image})`: "white"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const DivButton = styled.div`

  width: 100%;
  display: flex;
  gap: 1rem;

`

export const ButtonBackImage = styled.button`
  color: black;
  background-color: white;
  border-radius: 5rem;
  padding: 0;
  width: 100%;
  font-size: 12px;



` 
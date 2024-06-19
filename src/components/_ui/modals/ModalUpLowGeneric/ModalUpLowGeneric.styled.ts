import styled from "styled-components";

interface IDivOutside  { 
  open: boolean
}

interface IDivContent{ 
  position: number
}
  

export const Outside  = styled.div<IDivOutside>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0);
  position: fixed;
  bottom: ${({ open }) => open == true ? '0' : '-100vh'};
  transition: bottom 0.5s ease;
  left: 0;
  display: flex;
  flex-direction: column;

`

export const Container = styled.div`
  min-height: 40%;
  position: relative;
  background-color: transparent;

`
export const Content = styled.div<IDivContent>`
  width: 100%;
  background-color: white;
  border-radius: 2rem 2rem 0 0;
  border: 1px solid var(--tertiary-text-color);
  height: 100%;
  position: absolute;
  padding: 0 5vw ;

` 

export const DivClose = styled.div`
  background-color: transparent;
  height: 100%;
` 

export const Line = styled.div`
  width: 15%;
  height: 0.3rem;
  background-color: var(--tertiary-text-color);
  border-radius: 1rem;

`

export const HeaderModal = styled.div`
  width: 100%;
  height: 10%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const BodyModal = styled.div`
  width: 100%;
  height: 100%;

` 
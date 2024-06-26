import styled from "styled-components";


interface LogoContainerProps {
    img: string;
}

export const LogoTop = styled.div<LogoContainerProps>`
  background-image: url(${(props) => props.img});
  background-repeat:no-repeat;
  background-position:center;
  height: 3.5rem;
  width: 100%;
` 

export const Content = styled.div`
  height:  100%;
  width: 100%;
  display: flex ;
  justify-content: center;
  flex-direction: column;
  align-items: center;


` 
export const HeaderLogo = styled.header`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;

` 
export const BodyContent = styled.section`
  width: 100%;
  height: 70%;
  background-color: white;
  border-radius: 0 2rem 0 0 ;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

` 
export const UserDiv = styled.div`
  position: absolute;
  top: -7vh;
  left: 7vw;
  width: 90vw;
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

`

export const UserTexts = styled.div`
  width: 100%;
  h2{ 
    color: var(--primary-text-color);
    font-weight: 500;
    font-size: 1.13rem;
    line-height: 1.31rem;
  }

  p{
    color: var(--primary-text-color);
    font-weight: 400;
    font-size: 0.88rem;
    line-height: 1rem;
  }

` 

export const OptionsDiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem ;

`

export const ButtonOptions = styled.button`
  display: flex;
  outline: none;
  border: none; 
  padding: 1.5rem 1rem;
  justify-content: space-between;
  border-bottom: 1px solid  var(--tertiary-text-color);
  background-color: transparent;
  width: 100%;
  align-items: center;
`
export const DivIconText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

`

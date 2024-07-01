import styled from "styled-components";

interface IContentProps{ 
    final: boolean,
    atualStatus:"success"|"analysis"|"error"|"selected"
}

interface IStatus{ 
    atualStatus:"success"|"analysis"|"error"|"selected"
    selected: boolean
}

interface ICircle{ 
    atualStatus:"success"|"analysis"|"error"|"selected",
    selected: boolean
}

export const Content = styled.div<IContentProps>`
    border-left: ${props => props.final === true  ? "0.5rem solid transparent" : props.atualStatus === "analysis"? "0.5rem solid var(--grey-color)" : "0.5rem solid var(--success-color)"};
    position: relative;
    min-height: 6rem;
    height: 20%;

`
export const Circle = styled.div<ICircle>`
    background-color: ${props => props.atualStatus === "analysis" ? "var(--grey-color)": props.atualStatus === "error"? "var(--error-color)" : props.atualStatus === "success"?"var(--success-color)" : "var(--primary-bg-color)" } ;
    width: 6vh;
    height: 6vh;
    min-height: 2.5rem;
    min-width: 2.5rem;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -1vh;
    left: -3.5vh;
    color: ${props => props.selected === true  || props.atualStatus != "success" ? "black": "white"};
    font-size: 1.5rem;
    border:${props => props.selected === true ? "0.5rem solid var(--blue-color)": "none"};
`
export const Texts = styled.div<IStatus>`
    padding: 0 2rem;
    h3{
        font-size: 1rem;
        font-weight: 600;
        line-height: 20px;
    }

    p{ 
        font-size: 0.88rem;
        font-weight: 300;
        line-height: 15px;
    }

    span{ 
        color: ${props => props.selected === true? "var(--primary-bg-color)" : props.atualStatus == "success" ? "var(--success-color)": props.atualStatus == "error"? "var(--error-color)" : props.atualStatus == "analysis" ? "var(--grey-color)" : "var(--primary-bg-color)"};
        font-size: 1rem;
        font-weight: 600;
        line-height: 20px;
    }

` 
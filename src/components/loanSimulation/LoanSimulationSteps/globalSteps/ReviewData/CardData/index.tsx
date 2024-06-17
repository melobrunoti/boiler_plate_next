import { Content } from "./CardData.styled"


interface IProps{ 
    title: string,
    data: string | number 

}

export const CardData = ({title, data}: IProps) => { 

    return ( 
        <Content>
            <p>{title}</p>
            <span>{data}</span>
        </Content>
    )
}
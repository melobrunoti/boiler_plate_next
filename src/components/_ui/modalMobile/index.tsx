import { ContainerModal } from "./modalMobile.styles";

interface IProps{ 
    active: boolean;
}


export function ModalMobile ({active}:IProps){ 

    return( 
        <ContainerModal active={active}>

        </ContainerModal>
    )
}
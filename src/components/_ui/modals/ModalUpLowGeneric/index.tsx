import { PropsWithChildren, useEffect, useState } from "react";
import { BodyModal, Container, Content, DivClose, HeaderModal, Line, Outside } from "./ModalUpLowGeneric.styled";


interface IProps extends PropsWithChildren { 
    open:boolean,
    close:()=> void,
    
}

export default function ModalUpLowGeneric ({children ,open, close}:IProps) {
    const [position, setPosition] = useState(0);
    const [startPosition, setStartPosition] = useState(0);
  
    const handleMouseDown = (event: React.TouchEvent<HTMLDivElement>) => {
        setStartPosition( event.touches[0].clientY - position);
    };
  
    const handleMouseMove = (event: React.TouchEvent<HTMLDivElement>) => {
        if(event.touches[0].clientY - startPosition > 0){
            setPosition(event.touches[0].clientY - startPosition);
        }else{ 
            setPosition(0)
        }
    };

    const handleMouseUp = () => {
        if(position > 100 ){ 
            close()
            setTimeout(()=> {
            setPosition(0)
        },100)
        }else{
            setPosition(0)
        }
    };
  

    return( 
        <Outside open={open} >
            <DivClose onClick={()=> close()}> 
            </DivClose >
            <Container>
                <Content 
                    style={{ transform: `translateY(${position}px)` }}
                    position={position}
                    onTouchStart={handleMouseDown}
                    onTouchMove={handleMouseMove}
                    onTouchEnd={handleMouseUp}
                >
                    <HeaderModal>
                        < Line />
                    </HeaderModal>
                    <BodyModal>
                        {children}
                    </BodyModal>
                </Content>
            </Container>
        </Outside>
    )
}
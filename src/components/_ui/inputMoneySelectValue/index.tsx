import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import { DivInside, DivOutside } from "./inputMoneySelectValue.styled";

interface IProps {
    value : number 
    setValue: Dispatch<SetStateAction<number>>
    max: number
}


export default function InputMoneySelectValue({value, setValue, max }: IProps ){ 

    
      const ref = useRef()


      const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {

        const currentValue = event.target.value;
        const dinheiroLimpo = event.target.value.replace(/[^\d,]/g, '').replace(',', '.');
        
        let valueFloat  = parseFloat(dinheiroLimpo)

        let selectPosition = event.target.selectionStart

        let element  = event.target
        

        window.requestAnimationFrame(()=> { 
            element.selectionStart = selectPosition
            element.selectionEnd = selectPosition
            
        })
        

        if( valueFloat && valueFloat < max ){ 
            setValue(parseFloat(valueFloat.toFixed(2)));
        }else if(!valueFloat){
            setValue(0);
        } else if (valueFloat > max){ 
            setValue(max)
        }

    };

    const formattedNumber = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);

    return ( 
        <DivOutside>
            <DivInside>
                <input type="text"  value={formattedNumber}  onChange={handleChange} />
            </DivInside>
        </DivOutside>
    )
}
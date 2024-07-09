import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import { DivInside, DivOutside } from "./inputMoneySelectValue.styled";
import { NumericFormat } from 'react-number-format'


interface IProps {
    value : number | undefined
    setValue: Dispatch<SetStateAction<number|undefined>>
    max: number
    min: number
}


export default function InputMoneySelectValue({value, setValue, max, min=0 }: IProps ){ 


    const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {

        const dinheiroLimpo = event.target.value.replace(/[^\d,]/g, '').replace(',', '.');
        let valueFloat  = parseFloat(dinheiroLimpo)
        if( valueFloat && valueFloat < max && valueFloat > min ){ 
            setValue(parseFloat(valueFloat.toFixed(2)));
        }else if(!valueFloat){
            setValue(undefined);
        } else if (valueFloat > max){ 
            setValue(max)
        }

    };

    return ( 
        <DivOutside>
            <DivInside>
                <NumericFormat  prefix="R$" thousandSeparator="." decimalSeparator="," decimalScale={2}   value={value} onChange={ handleChange } />
            </DivInside>
        </DivOutside>
    )
}
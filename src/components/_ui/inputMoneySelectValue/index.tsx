import { ChangeEvent, useState } from "react";
import { DivInside, DivOutside } from "./inputMoneySelectValue.styled";


export default function InputMoneySelectValue( ){ 

    const [ value , setValue ] = useState("100,00")

    const inputStyle = {
        width: `${(value.length + 1) * 0.7}rem`,
      };

      const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setValue(event.target.value);
      };

    return ( 
        <DivOutside>
            <DivInside>
                <span>R$</span> 
                <input type="text" style={inputStyle} value={value}  onChange={handleChange} />
            </DivInside>
        </DivOutside>
    )
}
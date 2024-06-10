import React from "react";

export interface IPropsPrimaryButton extends React.PropsWithChildren{ 
    width?:string,
    height?:string,
    callback?:()=> void,
    disabled?:boolean,
    type?:"submit" | "reset" | "button" | undefined,
}
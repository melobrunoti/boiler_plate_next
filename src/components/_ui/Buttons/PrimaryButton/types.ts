import React from "react";

export interface IPropsPrimaryButton extends React.PropsWithChildren{ 
    width?:string,
    height?:string,
    callback?:()=> void,
    type?:"submit" | "reset" | "button" | undefined,
}
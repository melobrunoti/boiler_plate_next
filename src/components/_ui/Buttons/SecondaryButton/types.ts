import React from "react";

export interface IPropsSecundaryButton extends React.PropsWithChildren{ 
    width?:string,
    height?:string,
    callback?:()=> void,
    type?:"submit" | "reset" | "button" | undefined,
}
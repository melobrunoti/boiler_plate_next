"use client"
import { Box, Button } from "@mui/material";
import { LoanSimulationContainer, MainContainer, DivTitle, SpanStep } from "./BasicPage.styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface IProps extends PropsWithChildren{ 
    step: string,
    title: string,
    setStep:  Dispatch<SetStateAction< string>> 
    back?: boolean,
    stepInfo?: boolean,
}



export default function BasicPage ({children ,step, setStep, title, back=true, }:IProps ){ 

    const route = useRouter( )

    function  handleBack ( ){ 
        if(step == "list" ){ 
            route.push("/home")
        }else if(step == "Installment" || "Status"){ 
            setStep("list")
        }
    }

    return (
        <MainContainer>
            <Box  height={"15vh"} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} >
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} padding={"1rem"}>
                    <DivTitle >
                        {back && (
                            <Button onClick={()=> handleBack()} sx={{color: "white"}}>
                                <ArrowBackIcon  />
                            </Button>
                        )}
                        <h1>
                            {title} 
                        </h1>
                    </DivTitle>
                </Box>
            </Box>
            <LoanSimulationContainer>
                {children}
            </LoanSimulationContainer>
        </MainContainer>
    )
    
}
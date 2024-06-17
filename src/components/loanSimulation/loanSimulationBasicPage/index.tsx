"use client"
import { Box, Button } from "@mui/material";
import { LoanSimulationContainer, MainContainer, DivTitle, SpanStep } from "./LoanSimulationBasicPage.styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { useRouter } from "next/navigation";

interface IProps extends PropsWithChildren{ 

    totalStep: number,
    step: number,
    title: string,
    setStep:  Dispatch<SetStateAction< number>> 
    back?: boolean,
    stepInfo?: boolean,
}



export default function LoanSimulationBasicPage ({children, totalStep ,step, setStep, title, back=true, stepInfo=true  }:IProps ){ 

    const route = useRouter( )
    function  handleBack ( ){ 
        if(step == 1 ){ 
            route.push("/welcome")
        }else { 
            setStep( (s)=> s - 1 )
        }
    }

    return (
        <MainContainer>
            <Box  height={"15vh"} display={"flex"} flexDirection={"column"} justifyContent={"flex-end"} >
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} padding={"1rem"}>
                    <DivTitle >
                        { back && (
                            <Button onClick={()=> handleBack()} sx={{color: "white"}}>
                                <ArrowBackIcon  />
                            </Button>
                        )
                        }
                        <h1>
                            {title} 
                        </h1>
                    </DivTitle>
                    {stepInfo && <SpanStep>Passo {step}/{totalStep}</SpanStep>}
                </Box>
            </Box>
            <LoanSimulationContainer>
                {children}
            </LoanSimulationContainer>
        </MainContainer>
    )
    
}
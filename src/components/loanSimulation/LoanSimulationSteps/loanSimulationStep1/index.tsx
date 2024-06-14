import { ContentStep1, ContentHeaderStep1, ContentBodyStep1, WhatsAppImage } from "./loanSimulationStep1.styles";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { loggedFetchConteiner, requestClientToken } from "@/api/config";
import { NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";
import { Box, CircularProgress } from "@mui/material";
import HeaderSteps from "../headerSteps";
import { useLoanSimulationResponseStore, useTokenClientStore } from "@/store/loanSimulation";
import { ILoan } from "@/store/loanSimulation/types";
import { IServerResponse } from "./types";
import { getClientTokenQuery, getLoanTipesQery } from "@/api/loanSimulation/queries";


interface iprops { 

    setStep:Dispatch<SetStateAction<number>>,
    SetTotalStep?: Dispatch<SetStateAction<number>>, 
    setTile:Dispatch<SetStateAction<string>>,
}

export default function LoanSimulationStep1({ setStep, setTile }:iprops ){ 

    const { token, setToken } = useTokenClientStore()
    const { setLoanType } = useLoanSimulationResponseStore();

    const { data, error, isLoading } = getClientTokenQuery()
    useEffect(()=> { 
        setTile("Produtos")
        if(data && !isLoading)setToken(data)
    },[data])
    const {data: res, error: er, isLoading: loading } = getLoanTipesQery(token)
    
    function selectLoanType (loanType: ILoan): void { 
        setLoanType(loanType)
        setStep(2)
    }

    return( 
        <ContentStep1>
            <HeaderSteps text={"Escolha uma opção de crédito para simular"}/>
            <ContentBodyStep1>
                { loading || isLoading? <Box display={"flex"} width={"100%"} height={"100%"}  justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box> :  
                    res?.data?.map(( elem:any)=> { 
                        return(<PrimaryButton key={elem.code} callback={()=> selectLoanType(elem)}>{elem.name}</PrimaryButton>)
                })}
            </ContentBodyStep1>
        </ContentStep1>
    )
}
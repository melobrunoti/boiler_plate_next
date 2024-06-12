import { ContentStep1, ContentHeaderStep1, ContentBodyStep1, WhatsAppImage } from "./loanSimulationStep1.styles";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { loggedFetchConteiner } from "@/api/config";
import { NEXT_PUBLIC_CONTAINER_V2_API } from "@/constants";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";
import { Box, CircularProgress } from "@mui/material";
import HeaderSteps from "../headerSteps";
import { useLoanSimulationResponseStore } from "@/store/loanSimulation";
import { ILoan } from "@/store/loanSimulation/types";
import { IServerResponse } from "./types";


interface iprops { 

    setStep:Dispatch<SetStateAction<number>>,
    SetTotalStep?: Dispatch<SetStateAction<number>>, 
    setTile:Dispatch<SetStateAction<string>>,
}

export default function LoanSimulationStep1({ setStep, setTile }:iprops ){ 

    const [ res, setRes ] = useState([] as ILoan[])
    const { setLoanType } = useLoanSimulationResponseStore();
    const [ loading, setLoading ] = useState(false as boolean)
    useEffect( ()=> { 
        setTile("Produtos")
        setLoading(true)
        loggedFetchConteiner(`${NEXT_PUBLIC_CONTAINER_V2_API}/operation/product?terms`).then((response:any )=> { 
            setRes( response.data )
            setLoading(false)
        })
    },[])
    
    function selectLoanType (loanType: ILoan): void { 
        setLoanType(loanType)
        setStep(2)
    }

    return( 
        <ContentStep1>
            <HeaderSteps text={"Escolha uma opção de crédito para simular"}/>

            <ContentBodyStep1>
                { loading? <Box display={"flex"} width={"100%"} height={"100%"}  justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box> :  
                    res?.map(( elem:any)=> { 
                        return(<PrimaryButton key={elem.code} callback={()=> selectLoanType(elem)}>{elem.name}</PrimaryButton>)
                })}
            </ContentBodyStep1>
        </ContentStep1>
    )
}
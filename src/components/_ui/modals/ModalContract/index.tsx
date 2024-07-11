import { useLoanSimulationStore, useTokenClientStore } from "@/store/loanSimulation";
import { ModalUpTopGeneric } from "../ModalUpTopGeneric";
import { Dispatch, SetStateAction, useState } from "react";
import { ContractVinculateQuery, GetContractQuery, singnatureContractQuery } from "@/api/home/queries";
import { Box, CircularProgress } from "@mui/material";
import { ContentPDF, DivButonsDocument, DivContentPDF } from "./ModalContract.styles";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { removeMaskCPF, removePhoneMask } from "@/utils/masks";
import AlertMobile from "../../Alert/alertMobile";
import { loggedUserStore } from "@/store/logged";

interface IProps{ 
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    hash: string,
    signatureCallBack?:()=>void
    logged_in?:boolean 
}

export default function ModalContract ({active, setActive, hash, signatureCallBack,  logged_in = false,  }: IProps){ 

    const { token } = useTokenClientStore()
    const {formData } = useLoanSimulationStore()
    const [signatureAlert, setSignatureAlert] = useState(false)
    const { loggedUser } = loggedUserStore()
    
    const bodyVinculate = { 
        subscribers: [
            {
                document: loggedUser ? removeMaskCPF(loggedUser?.document!) : removeMaskCPF(formData?.cpf!),
                name: loggedUser ? loggedUser.name : formData.name,
                telephone: loggedUser ? loggedUser.phone :  removePhoneMask(formData?.phone!),
                email: loggedUser? loggedUser.email : formData.email,
                type: 1
            },
        ]
    }


    const { data: vinculateData, isFetching: vinculateIsFetching }= ContractVinculateQuery(token, JSON.stringify(bodyVinculate),  hash, active)
    
    const {data: contractData , isFetching: contractIsFetching } = GetContractQuery(token, hash, vinculateData?.request_code )

    const {data: signatureData, isFetching: signatureIsFetching ,  refetch: dispatchSignature   } = singnatureContractQuery(token, hash)

    function handleSignature( ) { 
        setSignatureAlert(true)
        dispatchSignature()
    }

    function handlerSignatureCallBack( ){ 
        signatureCallBack && signatureCallBack()
        setSignatureAlert(false)
    }
    return( 
        <ModalUpTopGeneric  active={active} setActive={setActive} > 
            <ContentPDF>
                    {
                    contractIsFetching || vinculateIsFetching? (<Box display={"flex"} height={"100%"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>):
                        (
                            <>
                                <DivContentPDF>
                                    <object type="application/pdf"  data={`data:application/pdf;base64,${contractData?.data}`}></object>
                                </DivContentPDF>
                                <DivButonsDocument> 
                                    <a href={`data:application/pdf;base64,${contractData?.data}`} download> 
                                        <PrimaryButton >Baixar contrato</PrimaryButton>
                                    </a>
                                    <PrimaryButton callback={()=>handleSignature()} >Assinar contrato</PrimaryButton>
                                </DivButonsDocument>
                            </>
                        )
                    }
             </ContentPDF>
             <AlertMobile  callBack={()=> signatureCallBack ? handlerSignatureCallBack() :  setSignatureAlert(false) } open={signatureAlert} close={()=> setSignatureAlert(false)} title="" >
                { signatureIsFetching && (<Box display={"flex"} height={"100%"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)}
                { (signatureData?.return == true  && !signatureIsFetching) && (<Box display={"flex"} justifyContent={"center"} textAlign={"center"} alignItems={"center"} >Link de assinatura enviado por e-mail/SMS. Confira o aplicativo para mais detalhes.</Box>)}
                { (signatureData?.return == false && !signatureIsFetching) && (<Box display={"flex"} justifyContent={"center"} textAlign={"center"} alignItems={"center"} >Erro ao preparar seu contrato...</Box>)}
             </AlertMobile>
        </ModalUpTopGeneric>
    )
}
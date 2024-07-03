"use client"
import { floatToMoneyReal, formatDate } from "@/utils/masks";
import { ButtonOptions, CardAndOptions, ContentCard, ContentIten, ContentPDF, DivButonsDocument, DivContent, DivContentPDF, DivIconText, DivTitle, OptionsDiv } from "./operationsCard.styled";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RuleIcon from '@mui/icons-material/Rule';
import { ModalUpTopGeneric } from "@/components/_ui/modals/ModalUpTopGeneric";
import { Box, CircularProgress } from "@mui/material";
import { db } from "@/db/db.model";
import { GetContractQuery } from "@/api/home/queries";
import { useTokenClientStore } from "@/store/loanSimulation";
import { getClientTokenQuery } from "@/api/loanSimulation/queries";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


interface IProps {
    title: string,
    value: number,
    installmentsQuantity: number,
    status: string,
    installmentsDate:string,
    callBack: ()=> void,
    openOptions?: boolean,
    setStep?: Dispatch<SetStateAction<string>>,
    hash?:string

}

// const base64toBlob = (data: string) => {
//     const bytes = atob(data);
//     let length = bytes.length;
//     let out = new Uint8Array(length);

//     while (length--) {
//         out[length] = bytes.charCodeAt(length);
//     }
//     return new Blob([out], { type: 'application/pdf' });
// }

export function OperationsCards({title, hash, value, installmentsQuantity, status, installmentsDate,  callBack, openOptions=false, setStep }:IProps){ 

    const [ contract,  setContract ] = useState(false as boolean )
    const [userToken, setUserToken ] = useState("" as string | undefined); 
    db.AuthTable.get(1).then((obj)=> setUserToken(obj?.token))

    const {} = getClientTokenQuery()
    const { token } = useTokenClientStore()

    const {data: contractData , isFetching: contractIsFetching } = GetContractQuery(token, hash!, contract )

    // useEffect(()=>{
    //     if(contractData?.data){ 
    //         console.log(contractData?.data)
    //     }
    // },[contractData])

    // const blob = base64toBlob(contractData?.data)
    // const url = URL.createObjectURL(blob);

    return( 
        <CardAndOptions>

            <ContentCard onClick={()=>callBack() }>
                <DivTitle>
                    <h4>{title}</h4>
                </DivTitle>
                <DivContent>
                    <ContentIten>
                        <p>Valor</p> 
                        <span>{floatToMoneyReal(value)}</span>
                    </ContentIten>
                    <ContentIten>
                        <p>Parcelas</p> 
                        <span>{installmentsQuantity}x de {floatToMoneyReal(value / installmentsQuantity)}</span>
                    </ContentIten>
                    <ContentIten>
                        <p>Status</p> 
                        <span>{status}</span>
                    </ContentIten>
                    <ContentIten>
                        <p>Primeiro vencimento</p> 
                        <span>{formatDate(installmentsDate)}</span>
                    </ContentIten>
                </DivContent>
            </ContentCard>
            {openOptions && (
                <OptionsDiv>
                    <ButtonOptions onClick={()=> setContract(true)}><DivIconText> <FileOpenIcon />Contrato</DivIconText> <ArrowForwardIosIcon/></ButtonOptions>
                    <ButtonOptions onClick={() => { setStep && setStep("Installment")}} ><DivIconText> <CalendarMonthIcon/>Parcelas</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
                    <ButtonOptions onClick={()=> {setStep && setStep("Status")}}><DivIconText> <RuleIcon/>Status</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
                    <ButtonOptions onClick={()=> {setStep && setStep("Document")}}><DivIconText> <FileOpenIcon/>Documentos</DivIconText>  <ArrowForwardIosIcon/></ButtonOptions>
                </OptionsDiv>
            )}
            <ModalUpTopGeneric  setActive={setContract} active={contract}>
             {/* <a href={`data:application/pdf;base64,${contractData?.data}`} target="_blank" rel="noopener noreferrer"> akiiiiiiii</a> */}
            {/* {url && <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={url} />;
                </Worker>} */}
            {/* {contractData?.data && (<object width="100%" height="100%" type="application/pdf" data={`data:application/pdf;base64,${contractData?.data}`} > </object>)}   */}
             <ContentPDF>

                {contractIsFetching && (<Box display={"flex"} height={"100%"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)}
                    <DivContentPDF>

                    </DivContentPDF>
                    <DivButonsDocument> 


                    </DivButonsDocument>


             </ContentPDF>
                
            </ModalUpTopGeneric>
        </CardAndOptions>
    )
}
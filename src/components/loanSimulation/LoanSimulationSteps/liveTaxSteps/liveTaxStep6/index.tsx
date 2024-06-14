import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BigSpan, CardStep6, ContentLiveTaxStep6, DivButtons, DivCardsStep6, DivContent, DivLink, InLineTextDiv, InLineTextDivWhitGap } from "./liveTaxStep6.styled";
import HeaderSteps from "../../headerSteps";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";
import SecondaryButton from "@/components/_ui/Buttons/SecondaryButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelectedInstallmentStore } from "@/store/loanSimulation";
import { floatToMoney } from "@/utils/masks";
import { formatDate } from "@/utils/date";
import ModalDetail from "@/components/_ui/modals/ModalDetail";
import ModalConfirm from "@/components/_ui/modals/ModalConfirm";

interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
} 

export const LiveTaxStep6 = ({setStep, setTitle}:iprops )=> {

    const [ openModalDatail,  setOpenModalDatail ] = useState(false as boolean) 
    const [ openModalConfirm,  setOpenModalConfirm ] = useState( false as boolean)

    const {installment} = useSelectedInstallmentStore()

    useEffect(()=> { 
        setTitle("Simulação - Resumo")
    })

    function handleConfirm (){ 
        setStep((s)=> s+1 )
        setOpenModalConfirm(false)
    }

    function cancel( ){ 
        setStep((s)=> s-1)
    }

    return( 
        <ContentLiveTaxStep6>
            <HeaderSteps text={"Resumo da Simulação"}/>
            <DivContent>
                <DivCardsStep6>
                    <CardStep6>
                        <p>Valor total</p>
                        <InLineTextDiv>
                            <span>R$</span>
                            <BigSpan>{floatToMoney(installment.requested_amout)}</BigSpan>
                        </InLineTextDiv>
                    </CardStep6>

                    <CardStep6>
                        <p>Parcelas</p>
                        <InLineTextDivWhitGap>
                            <BigSpan>{installment.total_installments}x</BigSpan>
                            <span>de</span>
                            <InLineTextDiv>
                                <span>R$</span>
                                <BigSpan>{floatToMoney(installment.installments[0]?.installment_amount )}</BigSpan>
                            </InLineTextDiv>
                        </InLineTextDivWhitGap>
                    </CardStep6>

                    <CardStep6>
                        <span>1º vencimento</span>
                        <BigSpan>{formatDate(installment?.installments[0]?.due_date)}</BigSpan>
                    </CardStep6>
                    <DivLink>
                        <button onClick={()=>setOpenModalDatail(true)}>Ver detalhes da simulação <ArrowForwardIosIcon  sx={{fontSize: "1rem"}} /> </button>
                    </DivLink>
                </DivCardsStep6>

                <DivButtons>
                    <PrimaryButton type="button" callback={()=> setOpenModalConfirm(true)}>Avançar</PrimaryButton>
                    <SecondaryButton type="button" callback={()=>cancel()} >Cancelar</SecondaryButton>
                </DivButtons>

            </DivContent>
                
            <ModalDetail open={openModalDatail} installment={installment} callBack={()=> setOpenModalDatail(false)}  close={()=> setOpenModalDatail(false)} title="Detalhes da Simulação" />
            <ModalConfirm open={openModalConfirm} close={()=> setOpenModalConfirm(false)} text="À partir deste momento você estará formalizando sua proposta de crédito e será necessário o fornecimento de informações e documentos." title="Atenção!" callBack={()=> handleConfirm()}  /> 
        </ContentLiveTaxStep6>
        
    )
}
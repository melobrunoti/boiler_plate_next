import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { PropsWithChildren } from "react"
import PrimaryButton from "../../Buttons/PrimaryButton"
import { ISimulation } from "@/store/loanSimulation/types"
import { ContentBody, ContenteDetail, DetailCartd, TextsBotton } from "./modalDetail.styles"
import { floatToMoney, floatToMoneyReal } from "@/utils/masks"
import { useLoanSimulationResponseStore } from "@/store/loanSimulation"

interface IProps { 
    open: boolean, 
    close: () => void,
    title: string,
    callBack: ( ) => void,
    installment: ISimulation

}

export default function ModalDetail ({ installment, open, close, title, callBack}: IProps ){ 

    const {loanType} = useLoanSimulationResponseStore()

    return( 
        <Dialog
          open={open}
          onClose={(e,d)=>close()}
          fullWidth={true}
          
          sx={{
            "& .MuiDialog-paper": {
            width: "95vw",
            padding: "1rem -1rem",
            borderRadius: "1rem",
            },
            "& .MuiDialogContent-root":{
                padding:" 0.8rem" ,
            }

            }}
        >
          <DialogTitle fontSize={"1rem"} fontWeight={600} textAlign={"center"}>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText >
                <ContentBody>
                    <ContenteDetail>
                        <DetailCartd>
                            <p>Valor*</p>
                            <span>{floatToMoneyReal(installment.requested_amout)}</span>
                        </DetailCartd>
                        <DetailCartd>
                            <p>Parcelas</p>
                            <span>{installment.total_installments}x de {floatToMoneyReal(installment?.installments[0]?.installment_amount)}</span>
                        </DetailCartd>
                        <DetailCartd>
                            <p>Encargos</p>
                            <span>{floatToMoneyReal(installment.tariff_amount)}</span>
                        </DetailCartd>
                        <DetailCartd>
                            <p>CET a.m</p>
                            <span>{installment.monthly_CET_amount?.toString().replace(".", ",")}%</span>
                        </DetailCartd>
                        <DetailCartd>
                            <p>IOF</p>
                            <span>{floatToMoneyReal(installment.iof_amount)}</span>
                        </DetailCartd>
                        <DetailCartd>
                            <p>Taxa Mensal**</p>
                            <span>{loanType?.rate?.base?.toString().replace(".", ",")}%</span>
                        </DetailCartd>
                    </ContenteDetail>
                    <TextsBotton>
                        <p>
                        *Sugeito à analize de crédito.
                        </p>
                        <p>
                        **As taxas aplicadas estão sujeitas à análise de risco
                        </p>
                    </TextsBotton>
                </ContentBody>
            <PrimaryButton type="button" callback={()=> callBack()}>OK</PrimaryButton>
            </DialogContentText>
          </DialogContent>
        </Dialog>
    )
}
import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { BodyAndFoter, BodyModal, CheckAndButton, CheckAndLabel, ContainerModal, DivBack, FooterButtons, HeaderModal } from "./modalAcceptanceTerms.styles";
import { Button, FormControl, Radio } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "../../../../../public/images/logo.png"
import { useLoanSimulationResponseStore } from "@/store/loanSimulation";
import PrimaryButton from "../../Buttons/PrimaryButton";

interface IProps extends PropsWithChildren{ 
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    callBack: ()=> void;
}


export function ModalAcceptanceTerms ({children, active, callBack, setActive }:IProps){ 

    const [checked,  setChecked] = useState(false)
    const { loanType } = useLoanSimulationResponseStore();

    function HandleBack ( ){ 
        setChecked( false)
        setActive(false)
    }

    function HandleConfirm (){ 
        setActive(false)
        setTimeout(()=>{ callBack() },250 )
    }

    return( 
        <ContainerModal active={active}>
            <HeaderModal>
                <Button className="buttonBack" onClick={()=>HandleBack()}>
                    <ArrowBackIcon  />
                </Button>
                <img src={logo.src} alt="Logo cdc" />   
            </HeaderModal>
            <BodyAndFoter> 
                <BodyModal>
                    <h2>Informações Gerais</h2>
                    <p>{loanType?.terms}</p>
                </BodyModal>
                <FooterButtons>
                    <CheckAndButton>
                        <CheckAndLabel>
                            <Radio size="medium" value="success" color="success" onClick={()=>setChecked(!checked) }  checked={checked}/>
                            <span>Declaro estar de acordo com os termos e condições.</span>
                        </CheckAndLabel >
                        <PrimaryButton disabled={!checked } callback={()=>HandleConfirm()} >Estou de acordo</PrimaryButton>
                    </CheckAndButton>
                </FooterButtons>
            </BodyAndFoter>
        </ContainerModal>
    )
}
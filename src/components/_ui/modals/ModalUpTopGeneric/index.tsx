import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import { BodyAndFoter, BodyModal, CheckAndButton, CheckAndLabel, ContainerModal, DivBack, FooterButtons, HeaderModal } from "./ModalUpTopGeneric.styles";
import { Button, FormControl, Radio } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "../../../../../public/images/logo.png"
import { useLoanSimulationResponseStore } from "@/store/loanSimulation";
import PrimaryButton from "../../Buttons/PrimaryButton";

interface IProps extends PropsWithChildren{ 
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}


export function ModalUpTopGeneric ({children, active, setActive }:IProps){ 

    function HandleClose (){ 
        setActive(false)
        setTimeout(()=>{ },250 )
    }

    return( 
        <ContainerModal active={active}>
            <HeaderModal>
                <Button className="buttonBack" onClick={()=>HandleClose()}>
                    <ArrowBackIcon  />
                </Button>
                <img src={logo.src} alt="Logo cdc" />   
            </HeaderModal>
            <BodyModal>
                {children}      
            </BodyModal>
        </ContainerModal>
    )
}
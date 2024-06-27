"use client"
import { MainContent } from '@/styles/Global.styles';
import { Box } from '@mui/material';
import { Content } from './Operations.styles';
import BasicPage from '@/components/BasicPage';
import { useState } from 'react';
import { OperationSteps1 } from './OperationsSteps/operationsSteps1';
import { ZodStringCheck } from 'zod';

export default function Operations( ){ 

    const [ step, setStep ] = useState("list" as string)
    const [ operation, setOperation ] = useState()

    return(
        <BasicPage step={step} setStep={setStep} title="Operações" back={true}>

            {step == "list" && (<OperationSteps1  step={step} setStep={setStep} setOperation={setOperation}/>)}
            {step == "detail" && (<div> akiiii {step}</div>)}
            {}

        </BasicPage>
    )
}
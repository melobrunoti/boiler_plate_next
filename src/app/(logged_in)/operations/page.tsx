"use client"
import BasicPage from '@/components/BasicPage';
import { useState } from 'react';
import { OperationSteps1 } from './OperationsSteps/operationsSteps1';
import InstallmentsStep from './OperationsSteps/installmentsStep';
import { StatusSteps } from './OperationsSteps/statusStep';

export default function Operations( ){ 

    const [ step, setStep ] = useState("list" as string)
    const [ operation, setOperation ] = useState([] as Array<any>)
    const [title, setTitle ] = useState("Operações")


    return(
        <BasicPage step={step} setStep={setStep} title={title} back={true}>
            {step == "list" && (<OperationSteps1  step={step} setStep={setStep} setOperation={setOperation} operation={operation}/>)}
            {step == "Installment" && operation.length > 0 &&  (<InstallmentsStep setStep={setStep} setOperation={setOperation} operation={operation} setTitle={setTitle} />)}
            {step == "Status" && operation.length > 0 && (<StatusSteps setStep={setStep} operation={operation} setTitle={setTitle} />)}
        </BasicPage>
    )
}
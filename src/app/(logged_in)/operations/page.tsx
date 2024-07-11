"use client"
import BasicPage from '@/components/BasicPage';
import { useEffect, useState } from 'react';
import { OperationSteps1 } from './OperationsSteps/operationsSteps1';
import InstallmentsStep from './OperationsSteps/installmentsStep';
import { StatusSteps } from './OperationsSteps/statusStep';
import { SubmitDocumentStep } from '@/components/loanSimulation/LoanSimulationSteps/globalSteps/SubmitDocumentStep';
import ContractStep from './OperationsSteps/Contract';
import { loggedUserStore } from '@/store/logged';
import { db } from '@/db/db.model';
import { GetLoggedUserQuery } from '@/api/home/queries';

export default function Operations( ){ 

    const [ step, setStep ] = useState("list" as string)
    const [ operation, setOperation ] = useState([] as Array<any>)
    const [title, setTitle ] = useState("Operações")
    const [userToken, setUserToken] = useState("" as string | undefined)
    db.AuthTable.get(1).then((res) => setUserToken(res?.token))
    const {data:user, isLoading } = GetLoggedUserQuery(userToken!)

    const {setLoggedUser, loggedUser} = loggedUserStore()
    

    useEffect(( )=> {
        if(user?.data){ 
          setLoggedUser(user?.data)
        }
    },[user])


    return(
        <BasicPage step={step} setStep={setStep} title={title} back={true}>
            {step == "list" && (<OperationSteps1  step={step} setStep={setStep} setOperation={setOperation} operation={operation}/>)}
            {step == "Contract" &&( <ContractStep setStep={setStep} setOperation={setOperation} operation={operation} setTitle={setTitle} />) }
            {step == "Installment" && operation.length > 0 &&  (<InstallmentsStep setStep={setStep} setOperation={setOperation} operation={operation} setTitle={setTitle} />)}
            {step == "Status" && operation.length > 0 && (<StatusSteps setStep={setStep} operation={operation} setTitle={setTitle} />)}
            {step == "Document" && operation.length > 0 && (<SubmitDocumentStep operation={operation} setTitle={setTitle}  />)}
        </BasicPage>
    )
}
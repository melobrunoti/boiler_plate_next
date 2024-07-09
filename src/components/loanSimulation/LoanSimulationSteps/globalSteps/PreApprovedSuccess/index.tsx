import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Content, DivButtons, BodyContent, DivContent, ContentTop, ContentBotton, } from "./PreApprovedSuccess.styled"
import TaskAlt from "@mui/icons-material/TaskAlt";
import { useAddressStore, useBankStore, useLoanSimulationStore, usePhotoStore, useSelectedInstallmentStore, useTokenClientStore } from "@/store/loanSimulation";
import { removeMaskCPF, removePhoneMask, removeRGMask } from "@/utils/masks";
import { CreateUserQuery, GetCreateUserAccountQuery, createOperationBySimulationQuery, createOperationDocumentCNHQuery, createOperationDocumentCpfQuery, createOperationDocumentCpfVerseQuery, createOperationDocumentFaceAndDocumentQuery, createOperationDocumentFaceQuery, createOperationPaymentQuery } from "@/api/loanSimulation/queries";
import { Box, Button, CircularProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { createOperationDocument } from "@/api/loanSimulation/fetchers";
import ModalContract from "@/components/_ui/modals/ModalContract";
import { useRouter } from "next/navigation";
import ErrorIcon from '@mui/icons-material/Error';
interface iprops { 
    setStep:Dispatch<SetStateAction<number>>,
    setTitle:Dispatch<SetStateAction<string>>,
    setBack: Dispatch<SetStateAction<boolean>>
} 

export const PreApprovedSuccess = ({setStep, setTitle, setBack}:iprops ) => {
    const [modalContract, setModalContract  ] = useState(false) 
    const router  = useRouter()
    useEffect( ( )=> { 
        setBack(false)
        setTitle("Crédito pré-aprovado")
    },[])

    const { formData } = useLoanSimulationStore()
    const { FormAddress } = useAddressStore( )
    const { FormBank } = useBankStore( )
    const { installment } = useSelectedInstallmentStore( )
    const {PhotoStore } = usePhotoStore()

    const { token } = useTokenClientStore()

    const payload = { 
        document:  removeMaskCPF(formData.cpf!),
        name: formData.name,
        identification: {
            type: "1", 
            number: removeRGMask(formData.rg!),
            date: "2010-01-01",
            part: "SPP",
            state: "MG"
        },

        birth_date: formData.birthDate,
        civil_status: 1, 
        document_conj: "00000000002",
        name_conj: "Teste 2",
        gender: formData.gender,
        telephone: removePhoneMask(formData.phone!),
        nationality_type: "1", 
        nationality_state: "MG",
        scholarity: 1, 
        formacao: "Engenheiro de teste",
        email: formData.email,
        mother_name: "Maria Mãe",
        address: {
            zip_code: FormAddress.CEP,
            street: FormAddress.address,
            number: FormAddress.number,
            complement: FormAddress.complement,
            neighborhood:FormAddress.neighborhood,
            city: FormAddress.city,
            state: FormAddress.state,
        },
        company_works: {
            nature_occupation: 1, 
            name: "CDC BANK",
            telephone: "(32) 9 90001-5000",
            document: "123456789789",
            occupation: "Dev",
            admission_date: "2023-01-01",
            remuneration: 1000.00,
            remuneration_others: 500.00,
            address: {
                zip_code: "01000000",
                street: "Teste",
                number: "1",
                complement: "APT 1",
                neighborhood: "Centro",
                city: "Cidade teste",
                state: "MG"
            }
        }
    }
    const payloaJson = JSON.stringify(payload)
    const {data: returnCreateUser , isFetching: isFetchingCreateUser } =  CreateUserQuery(token, payloaJson )
    const payloadAccount = { 
            bank_code: FormBank.bank,
            branch_number: FormBank.agency, 
            branch_code: FormBank.DV,
            account_number: FormBank.account,
            account_code: FormBank.accountDigit,
            account_type: 1
    }
    const payloadAccountJson = JSON.stringify( payloadAccount )
    const { data: returnCreateAccount, isFetching: isFetchingCreateAccount } = GetCreateUserAccountQuery(token,payloadAccountJson, returnCreateUser?.data?.code)
    const { data: retrunCreateOperation, isFetching : isFetchingCreateOperation   } = createOperationBySimulationQuery(token, installment.code, returnCreateAccount?.data?.code  );
    const payloadPayment = { 
            code_account: returnCreateAccount?.data?.code, 
            amount: installment.requested_amout
    }
    const { data: retrunCreatePayment, isFetching : isFetchingCreatePayment  } = createOperationPaymentQuery(token, JSON.stringify( payloadPayment), retrunCreateOperation?.data?.code , returnCreateAccount?.data?.code )

    const payloadDocumentRg = PhotoStore.photoRG ?  JSON.stringify({ type_doc: 1, extension_doc: 2, base64:PhotoStore.photoRG?.split(",")[1]}) : false;
    const payloadDocumentRgVerse = PhotoStore.photoRGVerse?  JSON.stringify({ type_doc: 2, extension_doc: 2, base64:PhotoStore.photoRGVerse?.split(",")[1]}) : false;
    const payloadDocumentCNH = PhotoStore.photoCNH ? JSON.stringify({ type_doc: 3, extension_doc: 2, base64:PhotoStore.photoCNH?.split(",")[1]}): false;
    const payloadDocumentface = PhotoStore.facePhoto ? JSON.stringify({ type_doc: 7, extension_doc: 2, base64:PhotoStore.facePhoto?.split(",")[1]}): false;
    const payloadDocumentFaceAndDocument  = PhotoStore.faceAndDocument ? JSON.stringify({ type_doc: 10, extension_doc: 2, base64:PhotoStore.faceAndDocument?.split(",")[1]}) : false;

    const {data: cpf, isFetching: isFetchingcpf  } = createOperationDocumentCpfQuery(token, payloadDocumentRg, retrunCreateOperation?.data?.code   )
    const {data: cpfVerse, isFetching: isFetchingcpfVerse } = createOperationDocumentCpfVerseQuery(token, payloadDocumentRgVerse, retrunCreateOperation?.data?.code )
    const { data: cnh, isFetching: isFetchingcnh   } = createOperationDocumentCNHQuery(token, payloadDocumentCNH, retrunCreateOperation?.data?.code )
    const { data: face, isFetching: isFetchingface} = createOperationDocumentFaceQuery(token, payloadDocumentface, retrunCreateOperation?.data?.code )
    const { data: faceAndDocumment, isFetching: isFetchingFaceAndDocument   } = createOperationDocumentFaceAndDocumentQuery(token, payloadDocumentFaceAndDocument, retrunCreateOperation?.data?.code )
    
    return(<>
            { isFetchingCreateUser  || isFetchingCreateAccount || isFetchingCreateOperation || isFetchingCreatePayment || isFetchingcpf || isFetchingcpfVerse || isFetchingcnh || isFetchingface || isFetchingFaceAndDocument ?
                (<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>) :
                ( <Content>
                        <BodyContent>
                            <DivContent>
                                <ContentTop>
                                    <TaskAlt sx={{color: "green", fontSize: "7rem"}}/>
                                    <h2>
                                        Crédito pré-aprovado com sucesso!
                                    </h2>
                                </ContentTop>
                                <ContentBotton>
                                    <div>
                                        <p>
                                            Seu contrato está apto para ser assinado. Caso deseje favor clicar no botão abaixo.  O mesmo também poderá ser assinado ao logar na aplicação.
                                        </p>
                                        <Button onClick={()=> setModalContract(true)}> Assinar Contrato</Button>
                                    </div>
                                    <span>
                                        A pré-aprovação foi baseada nas informações fornecidas e está sujeita a análise de crédito.
                                    </span>
                                </ContentBotton>
                            </DivContent>
                            <DivButtons>
                                <PrimaryButton type="submit" callback={()=> setStep((s)=> s+1)}>Acompanhar status</PrimaryButton>
                            </DivButtons>
                        </BodyContent>
                        <ModalContract active={modalContract} setActive={setModalContract} hash={retrunCreateOperation?.data?.code} signatureCallBack={() => router.push("/welcome")} /> 
                    </Content>
                )
            }
        </>)
}
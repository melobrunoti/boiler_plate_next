import { Dispatch, SetStateAction } from "react";
import { Content, ContractCard, ContractDate, ContractValues, DivContracts } from "./contract.styled";
import { OperationsCards } from "../../OpreationsCard";
import { Box, CircularProgress } from "@mui/material";
import PrimaryButton from "@/components/_ui/Buttons/PrimaryButton";
import PostAddIcon from '@mui/icons-material/PostAdd';


interface IProps { 
    setStep:Dispatch<SetStateAction<string>>,
    setOperation : Dispatch<SetStateAction<Array<any>>>
    operation: Array<any>,
    setTitle: Dispatch<SetStateAction<string>>,
}

export default function ContractStep ({operation, setOperation, setStep, setTitle}:IProps){  

    setTitle("Contrato");
    return( 
        <Content>
            {operation.map((op:any )=> (<OperationsCards key={op.codigoOperacao} title={op.codigoOperacao} value={op.valorDesembolsoPuro} status={op.statusDescricao} callBack={()=>setOperation([op])} installmentsDate={op.primeiroVencimento} installmentsQuantity={op.nParcelas} />))}
            <DivContracts >
            {(<Box display={"flex"} width={"100%"} justifyContent={"center"} alignItems={"center"}> <CircularProgress/> </Box>)}
                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>

                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>

                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>

                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>

                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>

                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>

                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>

                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>
                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>
                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>
                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>
                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>
                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>
                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>
                    <ContractCard>
                        <ContractValues>
                            <p>{"ada"}/{"aw21"}</p>
                            <span>{"sagdkjd"}</span>
                        </ContractValues>
                        <ContractDate>
                            <span>{"Pago"}</span>
                            <span>{"ckamd"}</span>
                        </ContractDate>
                    </ContractCard>

            </DivContracts>

            <PrimaryButton><PostAddIcon /> assinar novo contrato </PrimaryButton>
        </Content>
    )

} 
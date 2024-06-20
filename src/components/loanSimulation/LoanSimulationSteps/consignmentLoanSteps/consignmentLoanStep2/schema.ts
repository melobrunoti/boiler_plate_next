import { isValidCPF } from "@/utils/zodUtils"
import z from "zod"

export const zodSchema = z.object({ 
    name: z.string().min(1, "Este campo e obrigatorio"),
    email: z.string().min(1,  "Este campo e obrigatorio" ).email("Email invalido"),
    birthDate: z.string().date("Data invalida"),
    cpf: z.string().min(1,"Este campo e obrigatorio").min(14,"Seu cpf esta incompleto").refine(isValidCPF,"CPF invalido"),
    phone : z.string().min(1,"Este campo e obrigatorio").min(15,"Seu celular esta incompleto"),
    contractType: z.string().min(1, "Este campo e obrigatorio"), 

})

export type  IDataForm  = z.infer<typeof zodSchema>
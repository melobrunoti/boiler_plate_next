import z from "zod"

export const zodSchema = z.object({ 
    birthDate: z.date(),
    rg: z.string().min(1, "Este campo e obrigatorio"),
    sexo: z.string().min(1, "Este campo e obrigatorio"), 
    gender: z.string().min(1, "Este campo e obrigatorio"),
    maritalStatus: z.string().min(1, "Este campo e obrigatorio"),
    occupation: z.string().min(1, "Este campo e obrigatorio"),
    PEP: z.boolean()
    //name: z.string().min(1, "Este campo e obrigatorio"),
    //email: z.string().min(1,  "Este campo e obrigatorio" ).email("Email invalido"),
    //cpf: z.string().min(1,"Este campo e obrigatorio").min(14,"Seu cpf esta incompleto"),
    //phone : z.string().min(1,"Este campo e obrigatorio").min(15,"Seu celular esta incompleto"),

})

export type  IDataForm  = z.infer<typeof zodSchema> 
import z from "zod"

export const zodSchema = z.object({ 
    birthDate: z.string().date("Data invalida"),
    rg: z.string().min(1, "Este campo e obrigatorio").min(12,"Seu RG esta incompleto"),
    gender: z.string().min(1, "Este campo e obrigatorio"),
    maritalStatus: z.string().min(1, "Este campo e obrigatorio"),
    occupation: z.string().min(1, "Este campo e obrigatorio"),
    PEP: z.string({message:"Este campo e obrigatorio"}).min(1,"Este campo e obrigatorio")
})

export type  IDataForm  = z.infer<typeof zodSchema> 
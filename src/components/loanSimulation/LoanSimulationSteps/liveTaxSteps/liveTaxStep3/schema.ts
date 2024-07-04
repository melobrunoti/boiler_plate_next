import z from "zod"

export const zodSchema = z.object({ 
    birthDate: z.string().refine(dateString => {
        const date = new Date(dateString);
        const currentDate = new Date();
        const minDate = new Date("1900-01-01");
        return !isNaN(date.getTime()) && date >= minDate && date <= currentDate;
      }, { message: "Data inválida, muito antiga ou futura" }),

    rg: z.string().min(1, "Este campo e obrigatorio" ).min(12, "Esta faltando alguns digitos"),
    gender: z.string().min(1, "Este campo e obrigatorio").refine(value => value !== "none", {
      message: "Este campo e obrigatorio",
    }),
    maritalStatus: z.string().min(1, "Este campo e obrigatorio").refine(value => value !== "none", {
      message: "Este campo e obrigatorio",
    }),
    occupation: z.string().min(1, "Este campo e obrigatorio"),
    PEP: z.string({message:"Este campo e obrigatorio"}).min(1,"Este campo e obrigatorio")
})

export type  IDataForm  = z.infer<typeof zodSchema> 
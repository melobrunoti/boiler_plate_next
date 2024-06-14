import { z } from "zod";

export const AddressSchema = z.object({

    
  CEP: z.string().min(1,"Este campo e obrigatorio").min(9,"Seu CEP esta incompleto"), 
  address: z.string().min(1,"Este campo e obrigatorio"), 
  number: z.string().min(1,"Este campo e obrigatorio"),
  complement: z.string().nullable(),
  neighborhood: z.string().min(1,"Este campo e obrigatorio"),
  city: z.string().min(1,"Este campo e obrigatorio"),
  state: z.string().min(1,"Este campo e obrigatorio")

})

export type IAddressSchema  = z.infer<typeof AddressSchema>
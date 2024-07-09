import { z } from "zod";

const bankSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const BankSchema = z.object({
  //bank: z.string().min(1,"Este campo e obrigatorio"), 
  bank: bankSchema,
  agency: z.string().min(1,"Este campo e obrigatorio"),
  DV:z.string().min(1,"Este campo e obrigatorio"),
  account: z.string().min(1,"Este campo e obrigatorio"),
  accountDigit: z.string().min(1,"Este campo e obrigatorio"),
  accountType:z.string().min(1,"Este campo e obrigatorio")
})

export type IBankSchema  = z.infer<typeof BankSchema>
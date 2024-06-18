import { z } from "zod";

export const PasswordSchema = z.object({
    password: z
       .string()
       .min(8, 'A senha precisa ter mais de 8 caracteres.')
       .max(32, 'A senha precisa ter menos de 32 caracteres.'),
     confirmPassword: z.string(),
    })
    .refine((fields) => fields.password === fields.confirmPassword, {
     path: ['confirmPassword'],
     message: "Senhas não correspondem."
})

export type IDataForm = z.infer<typeof PasswordSchema>
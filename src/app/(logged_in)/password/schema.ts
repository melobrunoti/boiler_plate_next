import { z } from "zod";

export const PasswordSchema = z.object({
    atualPassword: z.string({required_error: "Este compo e obrigatoro"}).min(1,"Este compo e obrigatoro"),
    newPassword: z
       .string()
       .min(8, 'A senha precisa ter mais de 8 caracteres.')
       .max(32, 'A senha precisa ter menos de 32 caracteres.')
       .regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\-]).*$/, 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial'),
     confirmNewPassword: z.string(),
    })
    .refine((fields) => fields.newPassword === fields.confirmNewPassword, {
     path: ['confirmNewPassword'],
     message: "Senhas não correspondem."
})

export type IDataForm = z.infer<typeof PasswordSchema>
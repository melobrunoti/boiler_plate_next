import { z } from "zod";

export const PasswordSchema = z.object({
    password: z
       .string()
       .min(8, 'A senha precisa ter mais de 8 caracteres.')
       .max(32, 'A senha precisa ter menos de 32 caracteres.')
       .regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\-]).*$/, 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial'),
     confirmPassword: z.string(),
    })
    .refine((fields) => fields.password === fields.confirmPassword, {
     path: ['confirmPassword'],
     message: "Senhas não correspondem."
})

export type IDataForm = z.infer<typeof PasswordSchema>
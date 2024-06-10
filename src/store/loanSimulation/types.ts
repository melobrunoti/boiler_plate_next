interface FormData {
    name?: string,
    cpf?: string,
    email?: string,
    phone?: string,
    birthDate?: string,
    rg?: string,
    sexo?: string, 
    gender:string,
    maritalStatus: string,
    occupation: string,
    PEP: string
  }

  export type state = { 
    formData: FormData
  }

  export type  actions  = { 
    setFormData: (data: FormData )=> void
  } 
  
  export interface FormStore {
    formData: FormData;
    setFormData: (data: Partial<FormData>) => void;
  }
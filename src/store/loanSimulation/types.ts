interface FormData {
    name?: string,
    cpf?: string,
    email?: string,
    phone?: string,
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
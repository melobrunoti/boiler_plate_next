interface FormData {
    name?: string,
    cpf?: string,
    email?: string,
    phone?: string,
    birthDate?: string,
    rg?: string,
    sexo?: string, 
    gender?:string,
    maritalStatus?: string,
    occupation?: string,
    PEP?: string
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

  interface IPeriodicity {
    code: number;
    model: string;
    minimum: string;
    maximum: string;
}

interface IRate {
    code: number;
    model: string;
    base: string;
}

export interface ILoan {
    code?: string;
    name?: string;
    model?: string;
    guarantor?: string;
    disbursement_third_parties?: string;
    disbursement_multiple_accounts?: string;
    negative_customer?: string;
    percentage_customer_income?: string;
    minimum_installments_amount?: string;
    maximum_installments_amount?: string;
    minimum_operation_amount?: string;
    maximum_operating_amount?: string;
    time_admission_company?: string;
    terms?: string;
    periodicity?: IPeriodicity;
    rate?: IRate;
}

export interface ILoanType { 
  loanType:ILoan
  setLoanType: (data: FormData )=> void
}


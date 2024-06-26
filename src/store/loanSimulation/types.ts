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
    requiredValue?: number
    contractType?: string
    password?:string
    confirmPassword?:string
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

export interface IToken { 
  token: string 
  setToken: ( data: string) => void
}


interface Installment {
  code: string;
  amortized_amount: number;
  interest_amount: number;
  debt_amount: number;
  installment_amount: number;
  installment: number;
  due_date: string;
  days_until_expiration: number;
}

export interface ISimulation {
  code?: string;
  document_customer?: string;
  name_customer?: string;
  requested_amout?: number;
  tariff_amount?: number;
  free_tariff_amount?: number;
  disbursement_amount?: number;
  iof_amount?: number;
  iof_financed?: string;
  rate_iof_people_amount?: number;
  rate_iof_base_amount?: number;
  financed_amount?: number;
  total_interest_amount_installments?: number;
  rate_amount?: number;
  total_installments?: number;
  entry_date?: string;
  first_due_date?: string;
  last_due_date?: string;
  monthly_CET_amount?: number;
  annual_CET_amount?: number;
  installments?: Installment[];
}


export interface ISimulationStore{ 
  installment: ISimulation,
  setInstallment: (data: ISimulation) => void

}


export interface IFormAddress { 

  CEP?: string
  address?: string
  number?: string
  complement?: string
  neighborhood?: string
  city?: string
  state?: string

}

export interface IFormAddressStore{ 
  FormAddress: IFormAddress
  setFormAddress: (data : IFormAddress)=> void
}

export interface IFormBank { 
  bank?: string,  
  agency?: string, 
  DV?: string,
  account?: string, 
  accountDigit?: string, 
  accountType?: string, 

}

export interface IFormBankStore{ 
  FormBank: IFormBank 
  setFormBank: (data: IFormBank ) => void
}
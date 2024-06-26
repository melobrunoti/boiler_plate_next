import { create } from "zustand";
import { FormStore, IFormAddressStore, IFormBankStore, ILoan, ILoanType, ISimulationStore, IToken, actions, state } from "./types";

export const useLoanSimulationResponseStore = create<ILoanType>((set)=> ({ 
    loanType: {} as ILoan, 
    setLoanType: (data)=> set({loanType:data}),
}))

export const useTokenClientStore = create<IToken>((set)=> ({
    token:"",
    setToken: (data) => set((state) => ({token: data})
)
}))

export const useLoanSimulationStore = create<state & actions>((set) => ({
    formData: { name: "", cpf: "", email: "", phone: "",  birthDate: "", rg: "", gender:"",maritalStatus: "", occupation: "",PEP: "", contractType:"", requiredValue:0, password:"", confirmPassword:""},
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
}));

export const useAddressStore = create<IFormAddressStore>((set) => ({
    FormAddress: { },
    setFormAddress: ( data )=> set((state)=>({FormAddress: {...state.FormAddress, ...data} }))
}))

export const useBankStore = create<IFormBankStore>((set) => ({
    FormBank: { },
    setFormBank: ( data )=> set((state)=>({FormBank: {...state.FormBank, ...data} }))
}))

export const useSelectedInstallmentStore = create<ISimulationStore>((set)=> ({ 
    installment: {},
    setInstallment: (data)=> set((state) => ({installment:data}))
}))
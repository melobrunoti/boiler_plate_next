import { create } from "zustand";
import { FormStore, ILoan, ILoanType, actions, state } from "./types";

export const useLoanSimulationResponseStore = create<ILoanType>((set)=> ({ 
    loanType: {} as ILoan, 
    setLoanType: (data)=> set({loanType:data}),
}))

export const useLoanSimulationStore = create<state & actions>((set) => ({
    formData: { name: "", cpf: "", email: "", phone: "",  birthDate: "", rg: "",sexo: "", gender:"",maritalStatus: "", occupation: "",PEP: ""},
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
}));
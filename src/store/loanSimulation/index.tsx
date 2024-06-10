import { create } from "zustand";
import { FormStore, actions, state } from "./types";

export const useLoanSimulationResponseStore = create((set)=> ({ 
    loanType: {} as unknown, 
    setLoanType: (data:any)=> set((state:any)=>({loanType:data})),
}))

export const useLoanSimulationStore = create<state & actions>((set) => ({
    formData: { name: "", cpf: "", email: "", phone: "",  birthDate: "", rg: "",sexo: "", gender:"",maritalStatus: "", occupation: "",PEP: ""},
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
}));
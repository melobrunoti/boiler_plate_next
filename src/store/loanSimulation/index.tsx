import { create } from "zustand";
import { FormStore, actions, state } from "./types";

export const useLoanSimulationStore = create<state & actions>((set) => ({
    formData: { name: "", cpf: "", email: "", phone: "" },
    setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
}));
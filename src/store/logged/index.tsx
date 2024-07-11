import { create } from "zustand";
import { ILoggedUserStore } from "./types";

export const loggedUserStore = create<ILoggedUserStore>((set)=> ( { 

    loggedUser: { },
    setLoggedUser: (data)=> set((state) => ({loggedUser:data}))


}) )  

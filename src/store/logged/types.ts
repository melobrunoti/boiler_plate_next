

export interface ILoggedUser {
    document?: string;
    email?: string;
    name?: string;
    phone?: string;
}

export interface ILoggedUserStore{ 
    loggedUser:ILoggedUser,
    setLoggedUser: (data: ILoggedUser) => void
}
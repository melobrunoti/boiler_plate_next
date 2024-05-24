


export const MockPropsLogoutModal= { 

    open:true,
    handleClose: ()=>  localStorage.removeItem("email"),
    callback:()=> localStorage.removeItem("email"),
}
export const MockPropsLogoutModalWithOpenFalse= { 

  open:false,
  handleClose: ()=>  localStorage.removeItem("email"),
  callback:()=> localStorage.removeItem("email"),
}

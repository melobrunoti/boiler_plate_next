
export const MockPropsLogoutModalWithOpenFalse= { 

  open:false,
  handleClose: ()=>  localStorage.removeItem("email"),
  callback:()=> localStorage.removeItem("email"),
}
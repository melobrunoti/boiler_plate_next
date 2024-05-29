export  const removeCookie = (name: string) => {
  // Define o cookie com uma data de expiração no passado para removê-lo
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
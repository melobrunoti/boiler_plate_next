export const cpfCnpjMask = (valor:string) => {
    const valorLimpo = valor.replace(/[^\d]/g, '');
    const valorLimitado = valorLimpo.slice(0, 14);
    if (valorLimitado.length === 11) {
      return valorLimitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (valorLimitado.length === 14) {
      return valorLimitado.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        '$1.$2.$3/$4-$5'
      );
    } else {
      return valor;
    }
  };
  export const removeCpfCnpjMask = (valor:string) => {
    const numeroLimpo = valor.replace(/[^\d]/g, '');
    return numeroLimpo.slice(0, 14);
  };
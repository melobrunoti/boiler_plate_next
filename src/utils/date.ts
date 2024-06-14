export function addDaysToAtualDate(daysToAdd: number) {
    const currentDate = new Date(); // Obtém a data atual
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + daysToAdd); // Adiciona os dias
    return newDate.toISOString().split('T')[0]; // Retorna a nova data no formato "AAAA-MM-DD"
  }

export function formatDate(str: string){ 
 return str.split("-").reverse().join("/")

}
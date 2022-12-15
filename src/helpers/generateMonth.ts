
export const generateMonth = (quantity = 12): string[] => {

    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    return months.filter( (month, index) =>  index <= quantity-1 && month  )

}
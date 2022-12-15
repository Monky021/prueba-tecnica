import * as Yup from "yup";


const number = Yup.string().min(16).max(16)
const name = Yup.string().min(3).max(50)
// const month = Yup.string().min(2).max(2)
const month = Yup.number().integer()
const year = Yup.number().integer()
const cvv = Yup.string().min(3).max(3)


export const cardSchema = Yup.object({
    number: number.required('Numero requerido'),
    name: name.required('Nombre requerido'),
    month: month.required('Mes requerido'),
    year: year.required('Año requerido'),
    cvv: cvv.required('CVV requerido')
})
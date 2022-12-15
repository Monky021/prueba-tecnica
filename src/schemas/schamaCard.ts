import * as Yup from "yup";
const digitsOnly = (value: any) => /^\d+$/.test(value)

const number = Yup.string().test('Digits only', 'Solo se permiten números', digitsOnly).length(16, 'La longitud del número de tarjeta no es válida.')

const name = Yup.string().min(3).max(50)
// const month = Yup.string().min(2).max(2)
const month = Yup.number().integer()
const year = Yup.number().integer()
const cvc = Yup.number().integer('Debe ser un numero entero')


export const cardSchema = Yup.object({
    number: number.required('Numero requerido'),

    name: name.required('Nombre requerido'),

    month: month.required('Fecha invalida'),
    year: year.required('Fecha invalida'),
    cvc: cvc.required('cvc requerido')
})
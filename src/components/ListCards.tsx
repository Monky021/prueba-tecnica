import React from 'react'
import { useAppSelector } from '../hooks/hooks';

export const ListCards = () => {

const items = useAppSelector(state => state.listCards.items)
  return (
    <table className='table__cards' >
        <thead>
            <tr>
                <th>Numero de tarjeta</th>
                <th> Nombre titular </th>
                <th>Fecha de vencimiento</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map(item => (
                    <tr key={item.number}>
                        <td> {`**** **** **** ${item.number.substring(12)}`} </td>
                        <td> {item.name} </td>
                        <td> {`${item.month}/${item.year}`} </td>
                    </tr>

                ))

            }
        </tbody>
    </table>
  )
}

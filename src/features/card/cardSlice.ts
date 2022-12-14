import { createSlice } from '@reduxjs/toolkit' 

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { ICard } from '../../interface/ICard';


const initialState: ICard = {
    number: '',
    name: '',
    date: '',
    cvv: ''
} 

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCard: ( state, action: PayloadAction<ICard> ) => {
            state = {
                ...action.payload
            }
        }
    }
})

export const { setCard } = cardSlice.actions


export default cardSlice.reducer
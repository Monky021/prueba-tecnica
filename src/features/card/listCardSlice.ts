import { createSlice } from '@reduxjs/toolkit' 

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { ICard } from '../../interface/ICard';


const initialState: {items: Omit<ICard, 'cvc' | 'focus'>[]} = {
    items: []
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addItem: (state, action:PayloadAction<Omit<ICard, 'cvc' | 'focus'>>) => {
            state.items = [...state.items, action.payload] 
        }
       
    }
})

export const { addItem  } = cardSlice.actions


export default cardSlice.reducer
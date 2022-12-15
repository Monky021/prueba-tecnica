import { createSlice } from '@reduxjs/toolkit' 

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { ICard } from '../../interface/ICard';


const initialState: ICard = {

    number: '',
    name: '',
    month: '',
    year:0,
    cvc: '',
    focus: '',
    
} 

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCard: ( state, action: PayloadAction<ICard> ) => {
            
            state.cvc    = action.payload.cvc
            state.month  = action.payload.month
            state.name   = action.payload.name
            state.year   = action.payload.year
            state.number = action.payload.number
        },
        setFocus: (state, action:PayloadAction<string>)=> {
            state.focus = action.payload
        },
       
    }
})

export const { setCard, setFocus } = cardSlice.actions


export default cardSlice.reducer
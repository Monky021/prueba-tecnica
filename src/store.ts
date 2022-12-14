import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './features/card/cardSlice'

export const store = configureStore({
    reducer: {
      card: cardReducer
    },
  })


  export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
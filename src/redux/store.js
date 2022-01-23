import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './CardSlice'
export const store = configureStore({
  reducer: {
    cardReducer:cardReducer

  },
})
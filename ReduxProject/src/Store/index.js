import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from '../slices'
import  authSlice from '../slices/auth'
export const store = configureStore({
  reducer: {
    counterSlice:counterSlice,
    authSlice:authSlice

  },
})
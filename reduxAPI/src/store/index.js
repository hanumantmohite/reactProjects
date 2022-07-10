import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../slices'


import  todoSlice  from '../slices/todo'

// configureStore method actually configures your global state

export const store = configureStore({
  reducer: {
    counterSlice:counterSlice,
    
    todoSlice:todoSlice
  },
})
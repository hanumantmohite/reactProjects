import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value1: 0,
  value2: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Add1: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value1
    },
    Add2: (state) => {
      state.value2 
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
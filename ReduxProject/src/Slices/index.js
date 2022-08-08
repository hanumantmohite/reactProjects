import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  

    addTodo :(state ,action)=>{
    

state.value.push(action.payload);


    }


  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = counterSlice.actions

export default counterSlice.reducer
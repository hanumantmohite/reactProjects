import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

//This is async thunk action --
//we can dispatch it from our frontend

export const fetchProducts = createAsyncThunk(
    'todo/fetchProducts',
    async () => {
       // An async function return a promise
        const data=await axios.get("https://fakestoreapi.com/products");
        return data;
      
    }
  )
  
 export const fetchBooks = createAsyncThunk(
    'todo/fetchBooks',
    async () => {
       // An async function return a promise
        const data=await axios.get("https://www.googleapis.com/books/v1/volumes?q=Premchand");
        return data;
      
    }
  )



 
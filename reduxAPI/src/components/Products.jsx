
import React from 'react';
import {useEffect} from 'react'
import { fetchProducts } from '../thunks';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useDispatch, useSelector} from 'react-redux';


const Products = () => {

  const dispatch=useDispatch();
  const itemData=useSelector(state=>state.todoSlice.products)

  useEffect(()=>{

    dispatch(fetchProducts());

},[])


   
    
   

  return (
    <div >
     
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
   
    </div>
  )
}

export default Products
import { Grid, Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React ,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import { useSelector,useDispatch } from 'react-redux';
import { fetchBooks } from '../thunks';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Books = () => {

    const rows=useSelector(state=>state.todoSlice.Books);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchBooks());  //you can pass any input value to it --??

    },[])

    const columns = [
        { field: 'id', headerName: 'ID', width: 270 },
        { field: 'etag', headerName: 'Etag', width: 130 },



      ];
  return (
    <div>

<Grid item xs={6}>

        <Item>

        <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>




        </Item>
      </Grid>
    </div>
  )
}

export default Books 
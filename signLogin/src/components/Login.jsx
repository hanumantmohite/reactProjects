import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { loginAction } from '../thunks/auth';
import Alert from '@mui/material/Alert';


const Login = () => {
  const dispatch=useDispatch();
  const [success,setSuccess]=useState(false);

    const [state,setState]=useState({
        
        email:"",
        password:""

    })

    const handleChange=(event)=>{

        setState({
            ...state,
            [event.target.name]:event.target.value

        })

    }


    const handleClick=()=>{
      dispatch(loginAction(state)).then(response=>{

       if(response.payload.data.message=="User data saved")
       {
        setSuccess(true);
        setState({
          
        email:"",
        password:""
        })
       }


      })

    }
  return (
    <div>
         <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <div  style={{marginLeft:"500px"}}>
       <h1>Login Here</h1>
       {
        success?
       <Alert severity="success">Login Success</Alert>:""

       }

       </div>
  

  
      

      <TextField  name='email' onChange={handleChange}  label="Email" variant="standard" />
      <br/>

      <TextField name='password'  onChange={handleChange} label="Password" variant="standard" />
      <br/>

      <Button variant="contained"  onClick={handleClick}>Login</Button>

    </Box>
    </div>
  )
}

export default Login
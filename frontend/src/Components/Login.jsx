import Button from '@mui/material/Button'
import Navbar from '../Components/HomeData/Navbar'
import FormControl from '@mui/material/FormControl'
import { FormGroup, Stack } from '@mui/material'
import { Input } from '@mui/material'
import { InputLabel } from '@mui/material'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import '../Components/HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
 
  return (
    <>
     <Navbar />
    
     <Button onClick={() => navigate('adlogin')}> LOGIN </Button>
      <Box sx={{ p: 15, margin: 'auto', maxWidth: 700  }} >
        <FormGroup >
          <Typography variant='h4' >NEW USER</Typography>
          <FormControl  sx={{ m: 1}}>
            <InputLabel htmlFor='my-input'>NAME</InputLabel>
            <Input
              id='my-input'
            />
          </FormControl>

          <FormControl  sx={{ m: 1}}>
            <InputLabel htmlFor='my-input'>UNIVERSITY NUMBER</InputLabel>
            <Input
              id='my-input'  
            />
          </FormControl> 
          
          <FormControl  sx={{ m: 1}}>
            <InputLabel htmlFor='my-input'>EMAIL</InputLabel>
            <Input
              id='my-input'   
            />
             </FormControl> 

          <FormControl  sx={{ m: 1}}>
            <InputLabel htmlFor='my-input'>PASSWORD</InputLabel>
            <Input
              id='my-input'
            />
          </FormControl> 
        
          <Button
            variant='contained'
            color='primary'
            >
            {' '}
            LOGIN{' '}
          </Button>
         
        </FormGroup>
      </Box>
      
    </>
  )
}

export default Login


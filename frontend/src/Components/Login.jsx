import Button from '@mui/material/Button'
import Navbar from '../Components/HomeData/Navbar'
import { addUser} from './Notice/api'
import FormControl from '@mui/material/FormControl'
import { FormGroup } from '@mui/material'
import { Input } from '@mui/material'
import { InputLabel } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import '../Components/HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'


const initialValue = {
  name: '',
}

const Login = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState(initialValue)
  const { name } = user


  const onValueChange = (e) => {
    console.log(e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const addUserDetails = async () => {
    await addUser(user)
    navigate('/home')
  }
  return (
    <>
      <Navbar />
      <Button onClick={() => navigate('/admin')}> admin </Button>
      <Button onClick={() => navigate('/home')}> Home </Button>
      <Box sx={{ p: 15, margin: 'auto', maxWidth: 500 }}>
        <FormGroup>
          <Typography variant='h4' >LOGIN</Typography>
          <FormControl>
            <InputLabel htmlFor='my-input'>NAME</InputLabel>
            <Input
              id='my-input'
              onChange={(e) => onValueChange(e)}
              name='name'
              value={name}
            />
            <FormHelperText id='my-helper-text'>NAME</FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor='my-input'>UNIVERSITY NUMBER</InputLabel>
            <Input
              id='my-input'
              onChange={(e) => onValueChange(e)}
              name='name'
              value={name}
            />
            <FormHelperText id='my-helper-text'>DETAILS</FormHelperText>
          </FormControl> 
          
          <FormControl>
            <InputLabel htmlFor='my-input'>EMAIL</InputLabel>
            <Input
              id='my-input'
              onChange={(e) => onValueChange(e)}
              name='name'
              value={name}
            />
            <FormHelperText id='my-helper-text'>DETAILS</FormHelperText>
          </FormControl> 

          <FormControl>
            <InputLabel htmlFor='my-input'>PASSWORD</InputLabel>
            <Input
              id='my-input'
              onChange={(e) => onValueChange(e)}
              name='name'
              value={name}
            />
            <FormHelperText id='my-helper-text'>DETAILS</FormHelperText>
          </FormControl> 
        
          <Button
            variant='contained'
            color='primary'
            onClick={() => addUserDetails()}
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


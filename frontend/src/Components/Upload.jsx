import Navbar from '../Components/HomeData/Navbar'
import { addUser} from './Notice/api'
import FormControl from '@mui/material/FormControl'
import { FormGroup } from '@mui/material'
import { Input } from '@mui/material'
import { InputLabel } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import '../Components/HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'


const initialValue = {
  name: '',
}

const Upload = () => {
  const [user, setUser] = useState(initialValue)
  const { name } = user
  const navigate = useNavigate()

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
      <Box sx={{ p: 15, margin: 'auto', maxWidth: 500 }}>
        <FormGroup>
          <Typography variant='h4' >UPLOAD BOOKS</Typography>
          <FormControl>
            <InputLabel htmlFor='my-input'>BOOK NAME</InputLabel>
            <Input
              id='my-input'
              onChange={(e) => onValueChange(e)}
              name='name'
              value={name}
            />
            <FormHelperText id='my-helper-text'>BOOK NAME</FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor='my-input'>DEPARTMENT</InputLabel>
            <Input
              id='my-input'
              onChange={(e) => onValueChange(e)}
              name='name'
              value={name}
            />
            <FormHelperText id='my-helper-text'>DETAILS</FormHelperText>
          </FormControl> 
          
          <FormControl>
            <InputLabel htmlFor='my-input'>AUTHOR</InputLabel>
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
            style={{ marginBottom: 10 }}
            onClick={() => addUserDetails()}
          >
            {' '}
            UPLOAD{' '}
          </Button>
          
          <Button
            variant='contained'
            color='primary'
            onClick={() => addUserDetails()}
          >
            {' '}
            ADD{' '}
          </Button>
        </FormGroup>
      </Box>
    </>
  )
}

export default Upload

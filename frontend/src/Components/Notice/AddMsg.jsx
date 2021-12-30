import FormControl from '@mui/material/FormControl'
import { FormGroup } from '@mui/material'
import { Input } from '@mui/material'
import { InputLabel } from '@mui/material'
import { FormHelperText } from '@mui/material'
import { Box } from '@mui/system'
import Navbar from '../HomeData/Navbar'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { addMsg } from './api'
import '../HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'

const initialValue = {
  name: '',
}

const AddMsg = () => {
  const [ msg, setMsg] = useState(initialValue)
  const { name } =  msg
  const navigate = useNavigate()

  const onValueChange = (e) => {
    console.log(e.target.value)
    setMsg({ ...msg, [e.target.name]: e.target.value })
  }

  const addMsgDetails = async () => {
    await addMsg( msg )
    navigate('/home')
  }
  return (
    <>
      <Navbar />
        <AppBar position='static'>
          <Toolbar className='ATB'>ADD MESSAGES </Toolbar>
        </AppBar>
      <Box sx={{ p: 15, margin: 'auto', maxWidth: 700 }}>
        <FormGroup>
          <Typography variant='h4'>NOTICE BOARD</Typography>
          <FormControl>
            <InputLabel htmlFor='my-input'>MSG</InputLabel>
            <Input
              id='my-input'
              onChange={(e) => onValueChange(e)}
              name='name'
              value={name}
            />
            <FormHelperText id='my-helper-text'>YoUR MSG PLZ</FormHelperText>
          </FormControl>

          <Button
            variant='contained'
            color='primary'
            onClick={() => addMsgDetails()}
          >
            {' '}
            ADD{' '}
          </Button>
        </FormGroup>
      </Box>
    </>
  )
}

export default AddMsg

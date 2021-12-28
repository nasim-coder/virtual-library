import FormControl from '@mui/material/FormControl';
import { FormGroup } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUsers } from './api';
import { editUser } from './api';
import Navbar from '../HomeData/Navbar';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';

const initialValue = {
  name: ''
  
}

const EditMsg = () => {
    const [user, setUser] = useState(initialValue);
    const { name } = user;
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        const loadUserData = async() => {
            const response = await getUsers(id);
            setUser(response.data);
        }
        loadUserData();
    },[id]);

    

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async () => {
        await editUser(id,user);
        navigate('/home');
    }
    
    return ( 
         <>
        <Navbar />
        <AppBar position='static'>
          <Toolbar className='ATB'>EDIT MESSAGES </Toolbar>
        </AppBar>
        <Box sx={{p: 15, margin: 'auto', maxWidth: 500,  }}>
            
        <FormGroup>
        <Typography variant="h4">Edit </Typography>
        <FormControl >
        <InputLabel htmlFor="my-input">MSG</InputLabel>
        <Input id="my-input" onChange={(e) => onValueChange(e)} name='name' value={name} />
        <FormHelperText id="my-helper-text">NEW MSG</FormHelperText>
        </FormControl>

       
      <Button variant="contained" color="primary" onClick={() => editUserDetails()}> EDIT</Button>
      </FormGroup>
    
      </Box>
      </>
    )
}

export default EditMsg;
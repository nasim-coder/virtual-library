import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { makeStyles } from '@mui/styles'
import Toolbar from '@mui/material/Toolbar'
import { NavLink } from 'react-router-dom'
import books from '../Components/Image/books.jpg'


const useStyle = makeStyles({
  header: {
    background: 'linear-gradient(45deg, #000000 30%, #FF8E53 50%)',
  },
  tabs: {
    color: '#FFFFFF',
    marginRight: 20,
    textDecoration: 'none',
    fontSize: 20,
  },
})

const FirstPage = () => {
  const classes = useStyle()
  return (
    <>
      <AppBar position='static' className={classes.header}>
        <Toolbar>
          <NavLink className={classes.tabs} to='/' exact>
            VIRTUAL LIBRARY
          </NavLink>
          <NavLink className={classes.tabs} to='/login' exact>
            SIGN-IN
          </NavLink>
          <NavLink className={classes.tabs} to='login/adlogin' exact>
            ADMIN
          </NavLink>
        </Toolbar>
      </AppBar>

      <img
        title='books'
        src={books}
        alt='hello'
        style={{ width: '100vw', height: '100vh' }}
      />

      <p align='center'> © Copyright 2020</p>
    </>
  )
}

export default FirstPage

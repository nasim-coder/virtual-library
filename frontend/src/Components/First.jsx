import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { makeStyles } from '@mui/styles'
import Toolbar from '@mui/material/Toolbar'
import { NavLink } from 'react-router-dom'
import { Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import books from '../Components/Image/books.jpg'
import { Link } from 'react-router-dom'

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
            LOGIN
          </NavLink>
          <NavLink className={classes.tabs} to='admin' exact>
            ADMIN
          </NavLink>
        </Toolbar>
      </AppBar>

      <img
        title='books'
        src={books}
        alt='hello'
        style={{ width: 1535, height: 630 }}
      />

      <p align='center'> © Copyright 2020</p>
    </>
  )
}

export default FirstPage

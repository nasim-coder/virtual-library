import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import Navbar from '../HomeData/Navbar'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { getMsgs } from './api'
import { deleteMsg } from './api'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const AllMsg = () => {
  const [ msgs, setMsgs] = useState([])

  useEffect(() => {
    getAllMsgs()
  }, [])

  const getAllMsgs = async () => {
    const response = await getMsgs()
    console.log(response.data)
    setMsgs(response.data)
  }

  const deleteMsgData = async (id) => {
    await deleteMsg(id)
    getAllMsgs()
  }

  return (
    <>
      <Navbar />
      <AppBar position='static'>
          <Toolbar className='ATB'>ALL MESSAGES </Toolbar>
        </AppBar>
      <Box sx={{ p: 5, margin: 'auto', width: '80%', overflow: 'hidden' }}>
        <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <StyledTableCell align='revert'>ID&nbsp;</StyledTableCell>
                <StyledTableCell align='center'>MSG&nbsp;</StyledTableCell>

                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {msgs.map(( msg ) => (
                <StyledTableRow key={msg.id}>
                  <StyledTableCell component='th' scope='id'>
                    {msg.id}
                  </StyledTableCell>

                  <StyledTableCell align='revert'>{msg.name}</StyledTableCell>

                  <StyledTableCell align='right'>
                    <Button
                      size='small'
                      color='primary'
                      variant='contained'
                      style={{ marginRight: 10 }}
                      href={`/admin/edit/${msg.id}`}
                      startIcon={<EditIcon />}
                    >
                      {' '}
                    </Button>{' '}
                    {/* change it to user.id to use JSON Server */}
                    <Button
                      size='small'
                      color='secondary'
                      variant='contained'
                      onClick={() => deleteMsgData(msg.id)}
                      startIcon={<DeleteIcon />}
                    >
                      {' '}
                    </Button>{' '}
                    {/* change it to user.id to use JSON Server */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}
export default AllMsg

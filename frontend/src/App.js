import './App.css'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstPage from './Components/First'
import Admin from './Components/Admin'
import HomePage from './Components/Home'
import AllMsgs from './Components/Notice/AllMsgs'
import AddMsg from './Components/Notice/AddMsg'
import EditMsg from './Components/Notice/EditMsg'
import Upload from './Components/Upload'
import Adlogin from './Components/Adlogin'



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='login/adlogin' element={<Adlogin />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='admin/add' element={<AddMsg />} />
        <Route path='admin/all' element={<AllMsgs />} />
        <Route path='admin/edit/:id' element={<EditMsg />} />
        <Route path='/upload' element={<Upload />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

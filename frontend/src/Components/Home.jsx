// import Button from '@mui/material/Button'
import '../Components/HomeData/Homedata.css'
import { useNavigate } from 'react-router-dom'
import Merger from '../Components/HomeData/Merger'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Merger />
      {/* <Button onClick={() => navigate('/home')}> home </Button> */}
    </>
  )
}

export default HomePage

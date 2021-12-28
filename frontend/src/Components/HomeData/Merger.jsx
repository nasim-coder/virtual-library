import Navbar from './Navbar'
import AllMsgs from '../Notice/AllMsgs'
import Branches from './Branches'

function Merger() {
  return (
    <>
      <div className='merger'>
        <AllMsgs />
        <Branches />
      </div>
    </>
  )
}

export default Merger

import './App.css'
import { Link } from 'react-router'

// componnets are imported here
import BtnPrimary from './Button/BtnPrimary'
import BtnSecondary from './Button/BtnSecondary'

function App() {

  return (
    <>

      <div className='h-[90vh] w-[375px] bg-[#F7F8F9] flex flex-col item-center justify-end m-auto mt-10 px-[20px] py-[41px]'>
        <h1>Welcome to PopX</h1>
        <p className='mt-1 mb-[30px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit,</p>
        <Link to='/signup'><BtnPrimary>Create Account</BtnPrimary></Link>
       <Link to='/login'><BtnSecondary>Already Registered? Login</BtnSecondary></Link>
      </div>

    </>
  )
}

export default App

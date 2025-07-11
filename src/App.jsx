import './App.css'
import { Link } from 'react-router'

// componnets are imported here
import BtnPrimary from './Button/BtnPrimary'
import BtnSecondary from './Button/BtnSecondary'

// bg img 

function App() {

  return (
    <>
      <section className='bg-[#001434]'>

        <section className='w-full h-[25rem] flex justify-center items-center bg-cover'  style={{ backgroundImage: "url(./img/bg1.jpg)" }}>
          <span className='text-6xl font-semibold text-center text-white'>About us</span>
        </section>

        <section className='w-full h-[35rem] flex justify-evenly px-24 items-center m-auto bg-[#4E6185]/70'>

          <div className='h-[25rem] w-[25vw] px-12 flex flex-col justify-center items-center m-auto rounded-3xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:bg-gray-100'>
            <span className='text-4xl font-semibold text-center transition-all duration-300'>About us</span>
            <p className='text-xl text-center mt-4 font-medium transition-all duration-300'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nemo voluptatem, similique enim debitis quo incidunt voluptatibus voluptate provident ipsa?
            </p>
          </div>

          <div className='h-[25rem] w-[25vw] px-12 flex flex-col justify-center items-center m-auto rounded-3xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:bg-gray-100'>
            <span className='text-4xl font-semibold text-center transition-all duration-300'>About us</span>
            <p className='text-xl text-center mt-4 font-medium transition-all duration-300'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nemo voluptatem, similique enim debitis quo incidunt voluptatibus voluptate provident ipsa?
            </p>
          </div>

          <div className='h-[25rem] w-[25vw] px-12 flex flex-col justify-center items-center m-auto rounded-3xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:bg-gray-100'>
            <span className='text-4xl font-semibold text-center transition-all duration-300'>About us</span>
            <p className='text-xl text-center mt-4 font-medium transition-all duration-300'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nemo voluptatem, similique enim debitis quo incidunt voluptatibus voluptate provident ipsa?
            </p>
          </div>

        </section>

        <section className='w-full h-[45rem] flex flex-col m-auto bg-cover'  style={{ backgroundImage: "url(./img/bg2.jpg)" }}>
          <div className='bg-[#001434] w-[60vw] h-[15rem] mt-[13%]'>
            <div className='w-full h-full px-18 py-16 bg-[#4E6185]/70 '>
              <h3 className='text-6xl font-bold text-center text-white'>"To empower businesses with cutting-edge digital solutions."</h3>
            </div>
          </div>

          <button className='text-white text-2xl bg-[#880E4F] p-3 w-[20rem] mt-20 justify-center items-center m-auto rounded-xl'>Explore our solution</button>
        </section>

        <section className='w-full h-[80rem] border-white-2 flex justify-center items-center m-auto bg-[linear-gradient(180deg,rgba(0,20,52,1)_55%,rgba(0,0,0,1)_100%)]'>

          <div className='w-[44rem] flex flex-col m-auto justify-center items-center'>
            <div className='h-[36.8rem] w-[31.5rem] bg-[linear-gradient(180deg,rgba(18,23,31,1)_78%,rgba(45,54,70,1)_100%)] rounded-4xl flex flex-col justify-center items-center '>
              <img src="./img/profile.png" alt="" className='w-[27.4rem] h-[23rem] border-amber-100' />
              <span className='text-4xl text-white mt-5'>Abhishek kumar</span>
              <span className='text-xl text-white mt-3'>Founder & CEO</span>
              <span className='text-3xl text-white mt-3'>Vaishalitech</span>
            </div>
            <span className='text-4xl text-white font-extralight text-center mt-10'>A Message from Our CEO</span>
            <p className='text-2xl text-white font-extralight text-center mt-10'>"Technology companies like VaishaliTech don't just build solutions we shape the future. Every line of code, every design, and every strategy we create Impacts businesses, communities, and the digital landscape at large. But our responsibility doesn't stop there. We're committed to actions that uplift local economies, foster inclusivity, and reduce our environmental footprint because progress should benefit everyone, everywhere.</p>

            <p className='text-2xl text-white font-extralight text-center mt-10'>Through sustainable practices, ethical innovation, and partnerships that matter, we're not just delivering technology; we're building a legacy of positive change. Together, let's make the digital world a force for good."</p>

            <span className='text-2xl text-[#767A81] font-extraligh mt-10'>-Abhishek Kumar, Founder and CEO, Vaishalitech.</span>
          </div>
        </section>

      </section>



    </>
  )
}

export default App

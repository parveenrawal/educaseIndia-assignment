import './App.css'

function App() {

  return (
    <>
      <section className='bg-[#001434]'>

        <section className='w-full md:h-[25rem] h-[4.4rem] flex justify-center items-center bg-cover' style={{ backgroundImage: "url(./img/bg1.jpg)" }}>
          <span className='md:text-6xl text-2xl font-semibold text-center text-white'>About us</span>
        </section>


        <section className='w-full md:h-[35rem] flex md:flex-row flex-col  justify-evenly md:px-24 px-8 py-6 gap-5 items-center m-auto bg-[#2F4670]'>

          <div className='md:h-[25rem] h-[13rem] md:w-[25vw] md:px-12 flex flex-col justify-center items-center m-auto rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-[linear-gradient(130deg,rgba(0,20,52,1)_25%,rgba(0,0,0,1)_100%)]'>
            <span className='md:text-4xl text-xl font-semibold text-center text-white transition-all duration-300'>About us</span>
            <p className='md:text-xl text-xs px-5 text-center md:mt-4 mt-2 font-medium transition-all text-white duration-300'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nemo voluptatem, similique enim debitis quo incidunt voluptatibus voluptate provident ipsa?
            </p>
          </div>

          <div className='md:h-[25rem] h-[13rem] md:w-[25vw] md:px-12 flex flex-col justify-center items-center m-auto rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-[linear-gradient(130deg,rgba(0,20,52,1)_25%,rgba(0,0,0,1)_100%)]'>
            <span className='md:text-4xl text-xl font-semibold text-center text-white transition-all duration-300'>About us</span>
            <p className='md:text-xl text-xs px-5 text-center md:mt-4 mt-2 font-medium transition-all text-white duration-300'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nemo voluptatem, similique enim debitis quo incidunt voluptatibus voluptate provident ipsa?
            </p>
          </div>

          <div className='md:h-[25rem] h-[13rem] md:w-[25vw] md:px-12 flex flex-col justify-center items-center m-auto rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 bg-[linear-gradient(130deg,rgba(0,20,52,1)_25%,rgba(0,0,0,1)_100%)]'>
            <span className='md:text-4xl text-xl font-semibold text-center text-white transition-all duration-300'>About us</span>
            <p className='md:text-xl text-xs px-5 text-center md:mt-4 mt-2 font-medium transition-all text-white duration-300'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nemo voluptatem, similique enim debitis quo incidunt voluptatibus voluptate provident ipsa?
            </p>
          </div>


        </section>

        <section className='w-full md:h-[45rem] h-[12rem] flex flex-col m-auto bg-cover' style={{ backgroundImage: "url(./img/bg2.jpg)" }}>
          <div className='bg-[#001434] w-[70vw] md:w-[60vw]  md:h-[15rem] h-[4rem] md:mt-[13%] mt-[20%]'>
            <div className='w-full h-full md:px-18 md:py-16 px-8 py-4 bg-[#4E6185]/70 '>
              <h3 className='md:text-6xl text-xs font-bold text-center text-white'>"To empower businesses with cutting-edge digital solutions."</h3>
            </div>
          </div>

          <button className='text-white md:text-2xl text-xs bg-[#880E4F] md:p-3 p-1.5 md:w-[20rem] md:mt-20 justify-center items-center m-auto rounded-xl'>Explore our solution</button>
        </section>

        <section className='w-full md:h-[80rem] border-white-2 px-6 py-10 flex justify-center items-center m-auto bg-[linear-gradient(180deg,rgba(0,20,52,1)_55%,rgba(0,0,0,1)_100%)]'>

          <div className='md:w-[44rem] flex flex-col m-auto justify-center items-center'>
            <div className='md:h-[36.8rem] h-[22rem] md:w-[31.5rem] w-[17rem] bg-[linear-gradient(180deg,rgba(18,23,31,1)_78%,rgba(45,54,70,1)_100%)] rounded-4xl flex flex-col justify-center items-center '>
              <img src="./img/profile.png" alt="" className='md:w-[27.4rem] md:h-[23rem] h-[10rem] border-amber-100' />
              <span className='md:text-4xl text-2xl text-white mt-5'>Abhishek kumar</span>
              <span className='md:text-xl text-sm text-white mt-3'>Founder & CEO</span>
              <span className='md:text-3xl text-xl text-white mt-3'>Vaishalitech</span>
            </div>
            <span className='md:text-4xl text-2xl text-white font-extralight text-center mt-10'>A Message from Our CEO</span>
            <p className='md:text-2xl text-white font-extralight text-center mt-10'>"Technology companies like VaishaliTech don't just build solutions we shape the future. Every line of code, every design, and every strategy we create Impacts businesses, communities, and the digital landscape at large. But our responsibility doesn't stop there. We're committed to actions that uplift local economies, foster inclusivity, and reduce our environmental footprint because progress should benefit everyone, everywhere.</p>

            <p className='md:text-2xl text-white font-extralight text-center mt-10'>Through sustainable practices, ethical innovation, and partnerships that matter, we're not just delivering technology; we're building a legacy of positive change. Together, let's make the digital world a force for good."</p>

            <p className='md:text-2xl text-[#767A81] text-center font-extraligh mt-10'>-Abhishek Kumar, Founder and CEO, Vaishalitech.</p>
          </div>
        </section>

      </section>



    </>
  )
}

export default App

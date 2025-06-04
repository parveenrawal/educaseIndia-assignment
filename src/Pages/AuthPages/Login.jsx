import React from 'react';
import { Link } from 'react-router';
import BtnPrimary from '../../Button/BtnPrimary';

const Login = () => {
    return (
        <>
            <div className='h-[100vh] w-[375px] bg-[#F7F8F9] flex flex-col item-center justify-between m-auto mt-10 px-[20px] py-[41px]'>
                <div>
                    <h1 className='w-[195px]'>Signin to your PopX account</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

                    <form className="space-y-5 mt-6">

                        <div class="my-2 relative">
                            <label class="text-sm  text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-[335px] h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <div class="my-2 relative">
                            <label class="text-sm  text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-[335px] h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <Link to="/user-profile"><button
                            type="submit"
                            className="w-full my-3 py-3 bg-gray-300 text-white font-semibold rounded-md"
                        >
                            Login
                        </button></Link>
                    </form>
                </div>


            </div>

        </>
    );
}

export default Login;

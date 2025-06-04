import React from 'react';
import { Link } from 'react-router';
import BtnPrimary from '../../Button/BtnPrimary';

const Signup = () => {
    return (
        <>
            <div className='h-[100vh] w-[375px] bg-[#F7F8F9] flex flex-col item-center justify-between m-auto mt-10 px-[20px] py-[41px]'>
                <div>
                    <h1 className='w-[195px]'>Create your PopX account</h1>

                    <form className="space-y-4 mt-4">
                        <div className="my-2 relative">
                            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                                Full Name<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter full name"
                                className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>


                        <div className="my-2 relative">
                            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                                Phone number<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"

                            />
                        </div>

                        <div className="my-2 relative">
                            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                                Email address<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>


                        <div className="my-2 relative">
                            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                                Password<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <div className="my-2 relative">
                            <label className="text-sm text-[#6C25FF] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
                                Company name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter company name"
                                className="w-full h-[45px] border border-[#E4E7EC] rounded-[6px] p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </div>

                        <div className="ml-2 mt-4">
                            <label className="text-sm font-medium text-gray-700 mb-2 block">
                                Are you an Agency? <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center space-x-6">
                                <label className="flex items-center space-x-2 text-sm text-gray-700">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="yes"
                                        className="accent-violet-600"
                                    />
                                    <span>Yes</span>
                                </label>
                                <label className="flex items-center space-x-2 text-sm text-gray-700">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="no"
                                        className="accent-violet-600"
                                    />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                    </form>
                </div>

                <BtnPrimary>Create Account</BtnPrimary>

            </div>

        </>
    );
}

export default Signup;

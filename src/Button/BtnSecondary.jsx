import React from 'react';

const BtnSecondary = ({children}) => {
    return (
        <>
            <button className='w-full h-[46px] bg-[#6C25FF4B] mt-2 text-[#1D2226] font-medium text-[16px] rounded-md'>
                {children}
            </button>
        </>
    );
}

export default BtnSecondary;

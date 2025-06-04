import React from 'react';

const BtnPrimary = ({children}) => {
    return (
        <>
            <button className='w-full h-[46px] bg-[#6C25FF] text-white font-medium text-[16px] rounded-md'>
                {children}
            </button>
        </>
    );
}

export default BtnPrimary;

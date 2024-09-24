import React from 'react'

const PrimaryButton = ({ children, className, onclick }) => {
    return (
        <button onClick={onclick} className={`py-2 px-6 md:px-10 lg:px-12 md:py-3 hover:border-red hover:bg-black border border-black duration-300 font-semibold hover:text-red leading-[16px] rounded-sm text-base
        bg-red-dark 
         text-white ${className}`}>
            {children}
        </button>
    )
}

export default PrimaryButton

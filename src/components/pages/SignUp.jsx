import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../common/PrimaryButton';


const SignUp = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div className='gra min-h-[90vh] bg-black flex justify-center items-center'>

            <div className="max-w-[1170px] mx-auto px-4 xl:px-0">

                <div className="max-w-[600px] bg-white gap-3 p-4 rounded-md shadow-md shadow-red">
                    <div className='w-full'>
                        <h1 className='text-5xl font-medium'>Create an account</h1>
                        <p className='text-[16px] py-4 font-normal'>Enter your details below</p>
                        <div className='flex flex-col gap-5'>
                            <input className='border-b-2 border-gray-300 p-1' type="text" name="" id="a" placeholder=' Name' />
                            <input className='border-b-2 border-gray-300 p-1' type="text" name="" id="b" placeholder='Email or Phone Number' />
                            <input className='border-b-2 border-gray-300 p-1' type="text" name="" id="c" placeholder='Enter Password' />
                            <PrimaryButton className='!py-2 !px-12 !rounded'>Create Account</PrimaryButton>
                            <div className='flex items-center justify-center gap-4 py-1 px-2 border-2 border-gray-300 rounded'>
                                <p className='text-[16px] text-gray-700 font-medium text-center flex justify-center'>Sign up with Google</p></div>
                            <div className='flex items-center justify-center gap-1'>
                                <p className='text-[16px] text-gray-500'>Already have account?</p>
                                <Link to="/sign-in" className='text-xl sm:text-[16px] text-black font-medium hover:text-red hover:outline-1   hover:outline-red-dark'>Log in</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp
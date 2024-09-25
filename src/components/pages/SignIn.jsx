import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../common/PrimaryButton';


const SignIn = () => {
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

                            <input className='border-b-2 border-gray-300 p-1' type="text" name="" id="c" placeholder='Enter Password' />
                            <PrimaryButton className='!py-2 !px-12 !rounded'>Create Account</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn
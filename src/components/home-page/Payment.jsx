import React from 'react'

const Payment = () => {
    return (
        <div className="max-w-[500px] w-full">
            <div className='flex gap-6 justify-around'>
                <p className='flex items-center gap-1'><span className='p-1 rounded-full h-1 w-1 block border-black border'></span> Cash on Delivery</p>
                <p className='flex items-center gap-1'><span className='p-1 bg-black rounded-full h-1 w-1 block border-black border'></span> Credit Card</p>
            </div>
            <div className="border rounded-md my-5 bg-gray-50 p-5 flex flex-col gap-3">
                <div className='flex flex-col gap-1'>
                    <label htmlFor="cardnumber">Enter Your Card Number:</label>
                    <input type="text" name="cardnumber" id="cardnumber" className='border border-black px-2 py-1 rounded-md' placeholder='Card Number' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="date">Enter Your Card's expiry date:</label>
                    <input type="text" name="date" id="date" className='border border-black px-2 py-1 rounded-md' placeholder='Card Number' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="cvv">Enter Your CVV Number:</label>
                    <input type="text" name="cvv" id="cvv" className='border border-black px-2 py-1 rounded-md' placeholder='CVV' />
                </div>
            </div>

            <div className="flex justify-center">
                <button className='bg-black text-white px-6 py-3 rounded-md'>Confirm Payment</button>
            </div>
        </div>
    )
}

export default Payment

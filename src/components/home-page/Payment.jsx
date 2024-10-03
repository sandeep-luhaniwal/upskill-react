import React from 'react'

const Payment = () => {
    return (
        <div className='max-w-[1200px] px-4 mx-auto'>
            <div className="max-w-[500px]">
                <div className='flex'>
                    <p><span className='p-1 rounded-full border-black border'></span> Cash on Delivery</p>
                    <p><span className='p-1 rounded-full border-black border'></span> Credit Card</p>
                </div>
                <div className="border rounded-md bg-gray-50 p-5">
                    <div>
                        <label htmlFor="cardnumber">Enter Your Card Number:</label>
                        <input type="text" name="cardnumber" id="cardnumber" className='border border-black' placeholder='Card Number' />
                    </div>
                    <div>
                        <label htmlFor="date">Enter Your Card's expiry date:</label>
                        <input type="text" name="date" id="date" className='border border-black' placeholder='Card Number' />
                    </div>
                    <div>
                        <label htmlFor="cvv">Enter Your CVV Number:</label>
                        <input type="text" name="cvv" id="cvv" className='border border-black' placeholder='CVV' />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className='bg-black text-white px-6 py-3 rounded-md'>Confirm Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Payment

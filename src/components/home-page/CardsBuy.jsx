import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, addToCart } from '../../redux/cartSlice';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DisplayShoes from './DisplayShoes';
import Payment from './Payment';

const CardsBuy = () => {
  const dispatch = useDispatch();
  const { cart, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // State to track whether the user is currently in payment mode
  const [isInPaymentMode, setIsInPaymentMode] = useState(false);

  const handleBuyNow = () => {
    if (cart.length > 0) {
      if (isInPaymentMode) {
        navigate('/');
        setIsInPaymentMode(false); // Navigate back to shopping if already in payment mode
      } else {
        setIsInPaymentMode(true); // Set to payment mode
        navigate('/payment'); // Navigate to payment page
      }
    }
  };

  const handleAddToCart = (shoe) => {
    dispatch(addToCart(shoe));
  };

  return (
    <div className='max-w-[1170px] mx-auto px-4 xl:px-0 py-10 relative'>
      <div className="flex justify-between">
        {/* Displaying shoes */}
        <div className="w-[70%]">
          <Routes>
            <Route path='/' element={<DisplayShoes addToCart={handleAddToCart} />} />
            <Route path='/payment' element={<Payment />} />
          </Routes>
        </div>
        {/* Shopping Cart */}
        <div className="w-[28%] fixed right-10 top-[120px] z-50">
          <div className="bg-black p-3 pb-5 rounded-md">
            <h2 className='text-white text-2xl'>Cart</h2>
            <div className="max-h-[300px] overflow-auto hide">
              {cart.length === 0 ? (
                <p className="text-white">Your cart is empty.</p>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="flex mt-2 justify-between">
                    <div className='flex gap-3'>
                      <img src={item.image} alt={item.tital} className='h-10 w-10 object-cover' />
                      <div className="mb-0">
                        <p className='text-white text-base font-medium'>{item.tital}</p>
                        <p className='text-white text-xs leading-none'>Rs. {item.rate} x {item.quantity}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className='text-base font-bold p-1 bg-gray-600 text-white cursor-pointer' onClick={() => dispatch(decreaseQuantity(index))}>-</p>
                      <p className='text-base p-1 bg-gray-600 text-white cursor-pointer'>{item.quantity}</p>
                      <p className='text-base font-bold p-1 bg-gray-600 text-white cursor-pointer' onClick={() => dispatch(increaseQuantity(index))}>+</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <p className="text-white py-5">Total: Rs. {total}</p>
            <div className='mt-1'>
              <p onClick={handleBuyNow} className='bg-white cursor-pointer px-10 py-3 text-center'>
                {isInPaymentMode ? "Go back to shopping" : "Buy Now"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsBuy;

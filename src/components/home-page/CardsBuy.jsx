import React, { useContext, useState } from 'react';
import { BEST_SELLING_CARD_LIST } from '../common/Helper';
import PrimaryButton from '../common/PrimaryButton';
import UserContext from '../../context/UserContext';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import DisplayShoes from './DisplayShoes';
import Payment from './Payment';

const CardsBuy = () => {
  const { total, setTotal, cart, setCart, valueChange, setValueChange } = useContext(UserContext)
  const navigate = useNavigate();
  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(item => item.tital === product.tital);

    if (existingProductIndex !== -1) {
      // If product already exists in cart, increase the quantity
      updatedCart[existingProductIndex].quantity += 1;
      setTotal(total + Number(updatedCart[existingProductIndex].rate)); // Update total price
    } else {
      // Add new product with initial quantity 1
      updatedCart.push({ ...product, quantity: 1 });
      setTotal(total + Number(product.rate)); // Update total price
    }

    setCart(updatedCart);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    setTotal(total + Number(updatedCart[index].rate)); // Increase total price
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setTotal(total - Number(updatedCart[index].rate)); // Decrease total price
    } else {
      setTotal(total - Number(updatedCart[index].rate)); // Decrease total price
      updatedCart.splice(index, 1); // Remove product from cart if quantity is 0
    }
    setCart(updatedCart);
  };

  const handleClick = () => {
    if (cart.length > 0) {  // Ensure cart has items before proceeding
      setValueChange(!valueChange);
      if (!valueChange) {
        navigate('/payment');
      } else {
        navigate('/');
      }
    }
  };

  return (
    <div className='max-w-[1170px] mx-auto px-4 xl:px-0 py-10 relative'>
      <div className="flex justify-between">
        {/* Displaying shoes */}
        <div className="w-[70%]">
          <Routes>
            <Route path='/' element={<DisplayShoes addToCart={addToCart} />} />
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
                      <p className='text-base font-bold p-1 bg-gray-600 text-white cursor-pointer' onClick={() => decreaseQuantity(index)}>-</p>
                      <p className='text-base p-1 bg-gray-600 text-white cursor-pointer'>{item.quantity}</p>
                      <p className='text-base font-bold p-1 bg-gray-600 text-white cursor-pointer' onClick={() => increaseQuantity(index)}>+</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <p className="text-white py-5">Total: Rs. {total}</p>
            <div className='mt-1'>
              <p onClick={handleClick} className='bg-white cursor-pointer px-10 py-3 text-center'>{valueChange ? "Go back to shopping" : "Buy Now"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsBuy;

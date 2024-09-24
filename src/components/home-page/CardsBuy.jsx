import React, { useState } from 'react';
import { BEST_SELLING_CARD_LIST } from '../common/Helper';
import PrimaryButton from '../common/PrimaryButton';

const CardsBuy = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    updatedCart.push({ ...product, quantity: 1 }); // Add product with initial quantity 1
    setCart(updatedCart);
    setTotal(total + Number(product.rate)); // Update total price
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

  return (
    <div className='max-w-[1170px] mx-auto px-4 xl:px-0 py-10 relative'>
      <div className="flex justify-between">
        {/* Displaying shoes */}
        <div className="w-[70%] grid grid-cols-3 gap-6">
          {BEST_SELLING_CARD_LIST.map((obj, i) => {
            return (
              <div key={i} className='bg-gray-200'>
                <div className="h-[200px] overflow-hidden p-3 flex items-center justify-center">
                  <img src={obj.image} alt="shoe" className='w-[70%] object-cover' />
                </div>
                <div className="bg-black p-3 pb-5">
                  <p className='text-white text-xl font-bold'>{obj.tital}</p>
                  <p className='text-white py-2'>Rs. {obj.rate}</p>
                  <div className="flex justify-center mt-3">
                    <PrimaryButton onclick={() => addToCart(obj)}>Add to Cart</PrimaryButton>
                  </div>
                </div>
              </div>
            );
          })}
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
            <p className="text-white pt-5">Total: Rs. {total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsBuy;

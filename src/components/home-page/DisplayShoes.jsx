import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { BEST_SELLING_CARD_LIST } from '../common/Helper';
import PrimaryButton from '../common/PrimaryButton';

const DisplayShoes = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full grid grid-cols-3 gap-6">
      {BEST_SELLING_CARD_LIST.map((obj, i) => (
        <div key={i} className='bg-gray-200'>
          <div className="h-[200px] overflow-hidden p-3 flex items-center justify-center">
            <img src={obj.image} alt="shoe" className='w-[70%] object-cover' />
          </div>
          <div className="bg-black p-3 pb-5">
            <p className='text-white text-xl font-bold'>{obj.tital}</p>
            <p className='text-white py-2'>Rs. {obj.rate}</p>
            <div className="flex justify-center mt-3">
              <PrimaryButton onclick={() => dispatch(addToCart(obj))}>Add to Cart</PrimaryButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayShoes;

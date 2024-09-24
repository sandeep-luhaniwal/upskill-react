import React from 'react'
import { Link } from 'react-router-dom'
import scanbar from '../../assets/images/home-page/png/scanbar-playstor.png'
import { FacbookIcon, TwiterIcon, InstagramIcon, InIcon, MessageSendIcon } from './Icon'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black">
      <div className="px-4 max-w-[1170px] xl:px-0 mx-auto py-20">
        <div className="flex flex-wrap gap-10 sm:gap-6 md:gap-10 lg:gap-14 xl:gap-[86px] sm:justify-between">
          <div className='flex flex-col max-w-[217px]'>
            <Link href="/" className="text-white-light text-xl md:text-2xl font-bold !leading-none ">Exclusive</Link>
            <Link href="/" className="text-white-light text-base md:text-lg lg:text-xl font-medium !leading-[140%] mt-6">Subscribe</Link>
            <p className="text-white-light text-sm md:text-base !leading-[150%] mt-6">Get 10% off your first order</p>
            <div className="relative mt-4">
              <input type="email" placeholder='Enter your email' className='rounded-[4px] max-w-[217px] border-[1.5px] outline-none text-white border-white-light bg-black placeholder:text-white-light placeholder:opacity-40
        ps-4 py-3 pe-12' />
              <div className="absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer z-20">
                <MessageSendIcon />
              </div>
            </div>
          </div>
          {/* Support data */}
          <div className="flex flex-col max-w-[180px]">
            <p className='text-white-light text-base md:text-lg lg:text-xl font-medium !leading-[140%]'>Support</p>
            <p className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-6">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <Link to="mailto:exclusive@gmail.com" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-4">exclusive@gmail.com</Link>
            <Link to="telto:exclusive@gmail.com" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-4">+88015-88888-9999</Link>
          </div>
          {/* Account data */}
          <div className="flex flex-col max-w-[123px]">
            <p className='text-white-light text-base md:text-lg lg:text-xl font-medium !leading-[140%]'>Account</p>
            <Link to="#" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-6">My Account</Link>
            <Link to="#" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-4">Login / Register</Link>
            <Link to="#" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-4">Cart</Link>
            <Link to="#" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-4">Wishlist</Link>
            <Link to="#" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-4">Shop</Link>
          </div>
          {/* Quick Link data */}
          <div className="flex flex-col max-w-[109px]">
            <p className='text-white-light text-base md:text-lg lg:text-xl font-medium !leading-[140%]'>Quick Link</p>
            <Link to="#" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] text-nowrap mt-6">Privacy Policy</Link>
            <Link to="#" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-4">Terms Of Use</Link>
            <Link to="#" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-4">FAQ</Link>
            <Link to="#" className="text-white-light text-sm md:text-base hover:text-red duration-300 !leading-[150%] mt-4">Contact</Link>
          </div>
          {/* Download App data */}
          <div className="flex flex-col max-w-[198px]">
            <p className='text-white-light text-base md:text-lg lg:text-xl font-medium !leading-[140%]'>Download App</p>
            <p className="text-white-light text-xs !leading-[150%] mt-6">Save $3 with App New User Only</p>
            <Link to={"/"}> <img src={scanbar} alt="scanbar" className='w-full mt-2' /></Link>
            <div className="flex mt-6 gap-6">
              <Link target='_blank' to={"https://www.facebook.com/"} className='group'><FacbookIcon /></Link>
              <Link target='_blank' to={"https://www.Twiter.com/"} className='group'><TwiterIcon /></Link>

              <Link target='_blank' to={"https://www.facebook.com/"} className='group'><InstagramIcon /></Link>
              <Link target='_blank' to={"https://www.In.com/"} className='group'><InIcon /></Link>

            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 border-t border-white/20">
        <p className='text-white/25 '>Copyright Rimel {year}. All right reserved</p>
      </div>
    </div>
  )
}

export default Footer

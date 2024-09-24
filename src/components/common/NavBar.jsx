import React, { useState } from 'react'
import { HeartIocn, MenuIcon, SearchIcon, ShoppingCardIcon } from './Icon'
import { Link } from 'react-router-dom'
import { NAVBAR_LINKS_LIST } from './Helper';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-black-dark sticky top-0 z-50">
            <div className="mx-auto pb-4 max-w-[1170px] px-4 xl:px-0 pt-4 md:pt-8 lg:pt-10 bg-white flex justify-between items-center relative">

                <Link className='sm:text-2xl text-xl !leading-6 font-extrabold'>Exclusive</Link>
                <div className='justify-between items-center flex'>
                    <div className='md:flex gap-6 lg:gap-10 xl:gap-12 hidden'>
                        {NAVBAR_LINKS_LIST.map((obj, i) => {
                            return (
                                <Link key={i} to="#" className='text-base font-medium hover:text-red duration-300 relative after:absolute
                                 after:w-0 after:hover:w-full after:duration-300 after:bottom-[1px] after:left-0 after:bg-red after:h-[2px]'>
                                    {obj.title}
                                </Link>
                            )
                        })}
                    </div>
                </div>


                <div className="flex gap-2 sm:gap-4 items-center">
                    <div className="relative bg-gray-dark max-w-[100px] sm:max-w-[200px] lg:max-w-[243px] group w-full">
                        <input className='ps-2 sm:ps-3 lg:ps-5 pe-7 sm:pe-10 py-[6px] max-w-[243px] bg-gray-dark w-full text-xs !leading-6 outline-none border border-transparent rounded group-hover:border-red duration-300' type="search" name="search" id="search" placeholder='What are you looking for?' />
                        <div className='absolute z-20 top-1/2 -translate-y-1/2 end-1 sm:end-3 cursor-pointer'>
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="xl:ms-2">
                        <HeartIocn />
                    </div>
                    <ShoppingCardIcon />
                    <div onClick={() => setIsOpen(true)} className='cursor-pointer md:hidden'>
                        <MenuIcon />
                    </div>
                </div>

            </div>
            <div className={`fixed z-[300] top-0  h-full w-full bg-black flex flex-col gap-4 justify-center items-center duration-300 md:hidden ${isOpen ? "right-0" : "-right-full"}`}>
                <div onClick={() => setIsOpen(false)} className="absolute cursor-pointer top-4 end-4 text-white">
                    closed
                </div>
                <Link onClick={() => setIsOpen(false)} to="#" className='text-xl sm:text-2xl text-white font-medium hover:text-red duration-300'>Home</Link>
                <Link onClick={() => setIsOpen(false)} to="#" className='text-xl sm:text-2xl text-white font-medium hover:text-red duration-300'>Contact</Link>
                <Link onClick={() => setIsOpen(false)} to="#" className='text-xl sm:text-2xl text-white font-medium hover:text-red duration-300'>About</Link>
                <Link onClick={() => setIsOpen(false)} to="#" className='text-xl sm:text-2xl text-white font-medium hover:text-red duration-300'>Sign Up</Link>

            </div>
        </div>

    )
}

export default NavBar
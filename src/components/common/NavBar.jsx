import React, { useState } from 'react';
import { HeartIcon, MenuIcon, SearchIcon, ShoppingCardIcon } from './Icon';
import { Link, useLocation } from 'react-router-dom';
import { NAVBAR_LINKS_LIST } from './Helper';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPathname = location.pathname;

    return (
        <div className="border-b border-black-dark bg-white sticky top-0 z-[200]">
            <div className="mx-auto pb-4 max-w-[1170px] px-4 xl:px-0 pt-4 bg-white flex justify-between items-center relative">
                <Link className='sm:text-2xl text-xl !leading-6 font-extrabold' to="/">
                    Exclusive
                </Link>
                <div className='justify-between items-center flex'>
                    <div className='md:flex gap-6 md:gap-5 lg:gap-8 xl:gap-12 hidden'>
                        {NAVBAR_LINKS_LIST.map((obj, i) => (
                            <Link
                                key={i}
                                to={obj.url}
                                className={`text-base font-medium duration-300 relative after:absolute after:w-0 after:hover:w-full after:duration-300 after:bottom-[1px] after:left-0 after:h-[2px] 
                                ${currentPathname === obj.url ? 'text-red after:w-full after:bg-red' : 'hover:text-red after:bg-red'}`}
                            >
                                {obj.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 items-center">
                    <div className="relative bg-gray-dark max-w-[100px] sm:max-w-[200px] md:max-w-[120px]  lg:max-w-[243px] group w-full">
                        <input 
                            className='ps-2 sm:ps-3 lg:ps-5 pe-7 sm:pe-10 py-[6px] max-w-[243px]  bg-gray-dark w-full text-xs !leading-6 outline-none border border-transparent rounded group-hover:border-red duration-300' 
                            type="search" 
                            name="search" 
                            id="search" 
                            placeholder='What are you looking for?' 
                        />
                        <div className='absolute z-20 top-1/2 -translate-y-1/2 end-1 sm:end-3 cursor-pointer'>
                            <SearchIcon />
                        </div>
                    </div>
                    <div className="xl:ms-2">
                        <HeartIcon />
                    </div>
                    <ShoppingCardIcon />
                    <div onClick={() => setIsOpen(true)} className='cursor-pointer md:hidden'>
                        <MenuIcon />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed z-[300] top-0 h-full w-full bg-black flex flex-col gap-4 justify-center items-center duration-300 md:hidden ${isOpen ? "right-0" : "-right-full"}`}>
                <div onClick={() => setIsOpen(false)} className="absolute cursor-pointer top-4 end-4 text-white">
                    Close
                </div>
                {NAVBAR_LINKS_LIST.map((obj, i) => (
                    <Link
                        key={i}
                        onClick={() => setIsOpen(false)}
                        to={obj.url}
                        className={`text-xl sm:text-2xl text-white font-medium duration-300 ${currentPathname === obj.url ? 'text-red' : 'hover:text-red'}`}
                    >
                        {obj.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavBar;

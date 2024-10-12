import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import navimg from '../assets/banner.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track navbar visibility

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle navbar state on button click
  };
    
  return (
    <header>
    <nav className="z-10 border-gray-200 px-4 lg:px-6 py-2.5 bg-black fixed w-screen" >
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">    
                <img src={navimg} className="mr-3 h-10 w-24 sm:h-9" alt="Phoenix Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Phoenix Cybersecurity</span>
            </Link>
                <button  onClick={toggleNavbar} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                
            <div className={` justify-between items-center w-full lg:flex lg:w-auto lg:order-1 md:block ${isOpen ? 'block' : 'hidden'} md:w-auto`} id="navbar-default">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0" aria-current="page"> Home</Link>
                    </li>
                    {/* <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                    </li> */}
                    {/* <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                    </li> */}
                    <li>
                        <Link to="/domains" className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white border-gray-700">Our Domains</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className="block py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white border-gray-700">About Us</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className=" flex py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white border-gray-700">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/ourjourney" className=" flex py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white border-gray-700">Our Journey</Link>
                    </li>
                    <li>
                    <Link to="/team" className=" flex py-2 pr-4 pl-3 border-b lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-400 lg:hover:text-white hover:bg-gray-700 hover:text-white border-gray-700">Team</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

        
  )
}

export default Navbar;

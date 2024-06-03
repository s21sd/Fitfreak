import Image from 'next/image'
import React from 'react'
import logo from '../../assets/logo (3).png'
const Navbar = () => {
    return (
        <div>
            <header className="text-gray-400 bg-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
                        <Image className='' src={logo} width={100} height={100} alt='logo' />

                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
                        <a className="mr-5 hover:text-[#ffc20e] ">Home</a>
                        <a className="mr-5 hover:text-[#ffc20e]">About</a>
                    </nav>
                    <button className="inline-flex items-center bg-[#ffc20e] border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0 hover:text-[#ffc20e]">Login
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar

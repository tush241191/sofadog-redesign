import React, { useEffect, useState } from 'react';

const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const toggleMobileMenu = () => {
        setShowMobileMenu(v => !v)
    }

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex w-full">
                        <div className="w-1/5 flex-shrink-0 flex items-center">
                            <img className="block lg:hidden h-8 w-auto" src="/Logo-Without-Text.svg" alt="Workflow logo" />
                            <img className="hidden lg:block h-8 w-auto" src="/Logo-With-Text.svg" alt="Workflow logo" />
                        </div>
                        <div className="w-4/5 hidden justify-end sm:ml-6 sm:flex">
                            <a href="#" className="sfd-menu sfd-font-regular active inline-flex items-center px-1 pt-1 text-base font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out">
                                Features
                            </a>
                            <a href="#" className="sfd-menu sfd-font-regular ml-8 inline-flex items-center px-1 pt-1 text-base font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out">
                                Testimoials
                            </a>
                            <a href="#" className="sfd-menu sfd-font-regular ml-8 inline-flex items-center px-1 pt-1 text-base font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out">
                                Fookups
                            </a>
                            <a href="#" className="sfd-menu sfd-font-regular ml-8 inline-flex items-center px-1 pt-1 text-base font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out">
                                Jobs
                            </a>
                            <a href="#" className="sfd-menu sfd-font-regular ml-8 inline-flex items-center px-1 pt-1 text-base font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button onClick={toggleMobileMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-purple-100 focus:outline-none focus:bg-purple-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">

                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {showMobileMenu && (
                <div className="block sm:hidden">
                    <div className="pt-2 pb-3">
                        <a href="#" className="sfd-menu sfd-font-regular active block pl-3 pr-4 py-2 border-l-4 border-purple-500 text-base font-medium text-indigo-700 bg-purple-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">Features</a>
                        <a href="#" className="sfd-menu sfd-font-regular mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none transition duration-150 ease-in-out">Testimonials</a>
                        <a href="#" className="sfd-menu sfd-font-regular mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none transition duration-150 ease-in-out">Fookups</a>
                        <a href="#" className="sfd-menu sfd-font-regular mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none transition duration-150 ease-in-out">Jobs</a>
                        <a href="#" className="sfd-menu sfd-font-regular mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none transition duration-150 ease-in-out">Contact</a>
                    </div>
                </div>
            )}
        </nav>

    )
}

export default Header
import React, { useEffect, useState } from 'react';

const Header = (props) => {
    const [header, setHeader] = useState(null);
    useEffect(() => {
        setHeader(props?.header)
    })

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const toggleMobileMenu = () => {
        setShowMobileMenu(v => !v)
    }

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-28">
                    <div className="flex w-full">
                        <div className="w-4/5 md:w-1/4 lg:w-1/5 flex-shrink-0 flex items-center">
                            {header?.hasOwnProperty('logo') ? [
                                <img className="block h-16 w-auto" src={header?.logo.fields.file.url} alt="So.Fa.Dog" key={1}/>
                            ]
                                :
                                <img className="block h-16 w-auto" src="/color-logo-with-text.png" alt="So.Fa.Dog"></img>
                            }                            
                        </div>
                        {header?.hasOwnProperty('menu') && (
                            <div className="w-1/5 md:w-3/4 lg:w-4/5 hidden justify-end sm:ml-6 sm:flex">
                                {header?.menu.map((item, i) =>
                                    <a href="#" key={i} className="sfd-menu sfd-font-regular ml-8 inline-flex items-center px-1 pt-1 text-base font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out">
                                        {item}
                                    </a>
                                )}
                            </div>
                        )}

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
                    {header?.hasOwnProperty('menu') && (
                        <div className="pt-2 pb-3">
                            {header?.menu.map((item, i) =>
                                <a href="#" key={i} className="sfd-menu sfd-font-regular mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none transition duration-150 ease-in-out">
                                    {item}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            )}
        </nav>

    )
}

export default Header
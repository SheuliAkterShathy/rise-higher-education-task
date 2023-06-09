import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = () => { 

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let activeStyle = {
        textDecoration: "underline",
        color: 'yellow'
    };


    return (
        <div className="px-4 py-5 mx-auto md:px-24 bg-slate-900">
            <div className="relative flex items-center justify-between">


                <NavLink
                    to="/"
                    aria-label="All Book Information"
                    title="All Book Information"
                    className="inline-flex items-center"
                >

                    <img className='w-0 h-0 md:w-14 md:h-14 rounded-lg invisible md:visible' src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?w=900&t=st=1680024390~exp=1680024990~hmac=a973563a52532260730601cadbd095f099b33fc7340f4621665a97877d3c1bfe" alt="sell phone bd" />

                    <span className="ml-2 text-xl font-bold tracking-wide text-green-500 uppercase">
                        All Book Information
                    </span>
                </NavLink>


                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <NavLink
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                            to="/home"
                            aria-label="home"
                            title="home"
                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Home
                        </NavLink>
                    </li>
                   
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="z-10 absolute top-0 left-0 w-full">
                            <div className="p-5 bg-gray-900 border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <NavLink
                                            to="/"
                                            aria-label="All Book Information"
                                            title="All Book Information"
                                            className="inline-flex items-center"
                                        >

                                            <img className='w-14 h-14 rounded-lg' src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?w=900&t=st=1680024390~exp=1680024990~hmac=a973563a52532260730601cadbd095f099b33fc7340f4621665a97877d3c1bfe" alt="sell phone bd" />

                                            <span className="ml-2 text-xl font-bold tracking-wide text-green-500 uppercase">
                                                All Books Information
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-100" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <NavLink
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : undefined
                                                }
                                                to="/home"
                                                aria-label="home"
                                                title="home"
                                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Home
                                            </NavLink>
                                        </li>

                                        
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
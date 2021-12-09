import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="p-4 bg-site-dark">
            <div className="container flex justify-between h-16 mx-auto">
                <Link to="/" className="flex items-center px-4">
                    <img src="./mainLogo.png" alt="" className="w-36 mx-auto rounded-lg"/>
                </Link>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <Link to="/about" className="flex items-center px-4 -mb-1 border-b-2 border-site-light text-site-light text-lg font-bold hover:text-site-blue hover:border-site-blue transition duration-200">About Me</Link>
                    </li>
                    <li className="flex">
                        <Link to="/projects" className="flex items-center px-4 -mb-1 border-b-2 border-site-light text-site-light text-lg font-bold hover:text-site-blue hover:border-site-blue transition duration-200">Projects</Link>
                    </li>
                    <li className="flex">
                        <Link to="/goals" className="flex items-center px-4 -mb-1 border-b-2 border-site-light text-site-light text-lg font-bold hover:text-site-blue hover:border-site-blue transition duration-200">Goals</Link>
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden text-site-light">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-3 text-center items-center bg-site-dark' : 'hidden'} onClick={toggle}>
            <Link to="/about" className=" p-4 text-site-light text-lg font-bold hover:text-site-blue transition duration-200">About Me</Link>
            <Link to="/projects" className=" p-4 text-site-light text-lg font-bold hover:text-site-blue transition duration-200">Projects</Link>
            <Link to="/goals" className=" p-4 text-site-light text-lg font-bold hover:text-site-blue transition duration-200">Goals</Link>
        </div>
    )
}

export default Dropdown

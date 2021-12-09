import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="px-4 py-8 bg-site-light">
            <div className="container flex flex-wrap items-center justify-between mx-auto sm:justify-between sm:space-y-0 bg-site-light">
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <Link to="/">Terms of Use</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                    <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                        <li>
                            <a href='https://www.linkedin.com/in/christopher-wooldridge/'>LinkedIn</a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/christopher.wooldridge.9/'>Facebook</a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/cwooldridge/'>Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

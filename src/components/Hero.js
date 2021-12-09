import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="bg-site-light">
            <div className="bg-site-blue">
                <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-site-light">Christopher Wooldridge</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-site-light">Bachelors in Mechanical Engineering, Programmer, Goal Oriented</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/about"><button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded text-site-light">About Me</button></Link>
                        <Link to="/projects"><button type="button" className="px-8 py-3 m-2 text-lg border rounded text-site-light">My Latest Projects</button></Link>
                    </div>
                </div>
            </div>
            <img src="./profilePic.jpg" alt="" className="w-1/2 mx-auto -mt-20 rounded-lg shadow-md lg:-mt-40"/>
        </section>
    )
}

export default Hero

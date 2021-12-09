import React from 'react'

const Gcontent = () => {
    return (
        <section className="min-h-screen flex flex-auto bg-site-light">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Goals in Life</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-bold text-xl">-Have a profoundly positive impact through my work-</h3>
                        <p className="mt-1 dark:text-coolGray-400">Through each step of my career I have helped others through the products I've worked on. From my time in New York, my programs helped a device with concussion analysis. My time abroad helped a city with their national park. The time spent
                        having a positive impact on the youth at Duke TIP as a Teacher's Aide. And currently as an engineer producing the power sources for weaponry defending our troops.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">-Never backing away from a challenge-</h3>
                        <p className="mt-1 dark:text-coolGray-400">Whether it's a small problem of a component out of tolerance, or a complex solution to quaternion based mathematics for recalibration of an accelerometer
                        I will give every problem the same amount of effort.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">-Living Life to the fullest-</h3>
                        <p className="mt-1 dark:text-coolGray-400">I aspire to one day have the necessary skill set to travel the world, start my own business, provide for my Fiance and puppy, and leave my mark on the world.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">-Developing solid friendships wherever I go-</h3>
                        <p className="mt-1 dark:text-coolGray-400">Wherever I have traveled across the U.S. I try to make friends. This world is better when we can all work together to achieve great things.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gcontent

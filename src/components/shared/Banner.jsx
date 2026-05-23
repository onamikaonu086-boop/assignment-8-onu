"use client"
import { useSpring, animated } from '@react-spring/web';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const slides = [
    {
        
        img: "/banner-1.png", 
        title: "Find the Perfect Choice for Qurbani",
        desc: "Explore a wide range of healthy, premium Shahiwal and local Deshi cows from trusted farmers."
    },
    {
    
        img: "/banner-2.png",
        title: "Premium Breeds At Reasonable Price",
        desc: "Browse our active and fully healthy Black Bengal goats and heavy-weight rams ready for booking.",
    }
]

const Banner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 5000);

        return () => clearInterval(interval)
    }, [])

   
    const titleAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-30px)" },
        to: { opacity: 1, transform: 'translateY(0px)' },
        reset: true,
        key: current,
        config: { tension: 80, friction: 20 }
    })
    const descAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(-30px)" },
        to: { opacity: 1, transform: 'translateY(0px)' },
        reset: true,
        key: current,
        delay: 150,
        config: { tension: 80, friction: 20 }
    })
    const btnAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reset: true,
        key: current,
        delay: 500,
        config: { tension: 80, friction: 20 }
    })

    return (
        <div className="w-full mt-6 flex justify-center">
          
            <div className="max-w-7xl w-full mx-auto px-6 rounded-2xl overflow-hidden h-[50vh] md:h-[65vh] relative shadow-lg">

                <div
                    className='flex h-full transition-transform duration-700 ease-in-out'
                    style={{
                        transform: `translateX(-${current * 100}%)`
                    }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className='w-full flex-shrink-0 bg-cover bg-center bg-no-repeat relative'
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                          
                            <div className='absolute inset-0 bg-black/45 z-10'></div>

                          
                            <div className='text-white md:pl-16 p-6 h-full flex flex-col justify-center relative z-20 max-w-2xl'>
                                <animated.h1
                                    style={index === current ? titleAnimation : {} }
                                    className='text-3xl md:text-5xl font-black md:mb-6 leading-tight drop-shadow-md'>
                                    {slide.title}
                                </animated.h1>

                                <animated.p 
                                    style={index === current ? descAnimation : {}}
                                className='text-base md:text-lg text-gray-200 mb-6 drop-shadow'>
                                    {slide.desc}
                                </animated.p>

                               
                                <animated.div style={index === current ? btnAnimation : {}}>
                                    <Link 
                                        href='/animals' 
                                        className='inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition shadow-md hover:scale-105 transform active:scale-95'
                                    >
                                        Browse Live Animals
                                    </Link>
                                </animated.div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Banner;
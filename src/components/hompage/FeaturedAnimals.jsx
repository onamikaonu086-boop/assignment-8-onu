import { getFeaturedAnimals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaWandSparkles, FaWeightHanging, FaHourglassHalf, FaMarker } from 'react-icons/fa6';

const FeaturedAnimals = async () => {
    const featuredAnimals = await getFeaturedAnimals();

    return (
        <div className='max-w-7xl mx-auto px-6 py-12'>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-2'>
                    <FaWandSparkles className='text-orange-500' size={24} />
                    <h2 className='text-3xl font-bold text-center text-gray-800'>
                        Featured Livestock
                    </h2>
                </div>
                <Link
                    className='text-blue-800 font-medium hover:underline'
                    href='/animals'
                >
                    View All
                </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
                {
                    featuredAnimals.map((animal) => {
                        return (
                            <div
                                key={animal?.id}
                                className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col'
                            >
                              
                                <figure className='relative h-52 w-full overflow-hidden bg-gray-50'>
                                    <Image
                                        src={animal?.image}
                                        alt={animal?.name || "livestock"}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                                    />
                                  
                                    <span className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full font-medium tracking-wide">
                                        {animal?.category}
                                    </span>
                                </figure>

                                <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                                    <div>
                                      
                                        <h2 className="font-bold text-lg text-gray-900 line-clamp-1 group-hover:text-green-600 transition-colors">
                                            {animal?.name}
                                        </h2>
                                        <p className='text-xs text-gray-400 font-medium mt-0.5 mb-3'>
                                            {animal?.breed}
                                        </p>

                                       
                                        <p className='text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed'>
                                            {animal?.description}
                                        </p>

                                     
                                        <div className='grid grid-cols-2 gap-y-2.5 gap-x-2 py-3 px-4 bg-gray-50 rounded-xl text-xs text-gray-600 font-medium mb-5'>
                                            <div className='flex items-center gap-2'>
                                                <FaWeightHanging className='text-gray-400' size={13} />
                                                <span>{animal?.weight} kg</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <FaHourglassHalf className='text-gray-400' size={13} />
                                                <span>{animal?.age} Yrs</span>
                                            </div>
                                            <div className='flex items-center gap-2 col-span-2 border-t border-gray-200/60 pt-2 mt-0.5'>
                                                <FaMarker className='text-gray-400' size={13} />
                                                <span className='line-clamp-1'>{animal?.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mt-auto">
                                        <div className='flex items-baseline justify-between border-t border-gray-100 pt-3'>
                                            <span className='text-xs text-gray-400 font-medium'>Price</span>
                                            <span className='text-xl font-black text-orange-600 tracking-tight'>
                                                ৳{animal?.price?.toLocaleString()}
                                            </span>
                                        </div>

                                        <Link
                                            href={`/animals/${animal?.id}`}
                                            className='block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md'
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default FeaturedAnimals;
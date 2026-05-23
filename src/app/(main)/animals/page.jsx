"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAnimals } from '@/lib/data';
import { FaWeightHanging, FaHourglassHalf, FaLocationDot, FaFilter } from 'react-icons/fa6';

export default function AnimalsPage() {
    const [animals, setAnimals] = useState([]);
    const [sortBy, setSortBy] = useState("default");

    
    useEffect(() => {
        const fetchAnimals = async () => {
            const data = await getAnimals();
            setAnimals(data);
        };
        fetchAnimals();
    }, []);

    const sortedAnimals = [...animals].sort((a, b) => {
        if (sortBy === "low-to-high") return a.price - b.price;
        if (sortBy === "high-to-low") return b.price - a.price;
        return 0; 
    });

    return (
        <div className="container max-w-6xl mx-auto px-6 py-10 min-h-screen">
            
       
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-black text-gray-800 tracking-tight mb-2">
                        Available Livestock
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Browse our complete collection of premium cows and goats.
                    </p>
                </div>

          
                <div className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm">
                    <FaFilter className="text-green-600" size={16} />
                    <select 
                        className="bg-transparent text-sm font-semibold text-gray-700 outline-none cursor-pointer"
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Sort by Default</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                    </select>
                </div>
            </div>

      
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {sortedAnimals.map((animal) => (
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
                                        <FaLocationDot  className='text-gray-400' size={13} /> 
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
                ))}
            </div>

       
            {sortedAnimals.length === 0 && (
                <div className="text-center py-20 text-gray-500 font-medium">
                    Loading livestock data...
                </div>
            )}
        </div>
    );
}
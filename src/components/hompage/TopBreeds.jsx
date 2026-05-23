import React from 'react';
import { FaAward, FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';


const breeds = [
    {
        id: 1,
        name: "Shahiwal",
        type: "Cow",
        origin: "Pak-India",
        image: "https://i.postimg.cc/D0b8x9dF/shahiwal-cow.jpg", 
        desc: "Famous for bright reddish color and premium meat quality."
    },
    {
        id: 2,
        name: "Black Bengal",
        type: "Goat",
        origin: "Bangladesh",
        image: "https://i.postimg.cc/4xKjKq2b/black-bengal.jpg",
        desc: "World-class local breed known for the best quality meat."
    },
    {
        id: 3,
        name: "Holstein Friesian",
        type: "Cow",
        origin: "Australia",
        image: "https://i.postimg.cc/8P5n2ZzG/holstein-cow.jpg",
        desc: "Huge live weight and highly demanded in dairy & Qurbani markets."
    },
    {
        id: 4,
        name: "Jamunapuri",
        type: "Goat",
        origin: "India",
        image: "https://i.postimg.cc/wMs1hK2c/jamunapuri-goat.jpg",
        desc: "Tall structure and elegant look with white-brown shades."
    }
];

const TopBreeds = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
   
            <div className='flex justify-between items-center mb-8'>
                <div className='flex items-center gap-2'>
                    <FaAward className='text-orange-500' size={24} />
                    <h2 className='text-2xl font-bold text-gray-800'>
                        Top Demanded Breeds
                    </h2>
                </div>
            </div>

     
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {breeds.map((breed) => (
                    <div 
                        key={breed.id} 
                        className='group bg-gray-50/50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white hover:shadow-lg transition-all duration-300'
                    >
                    
                        <div className='w-28 h-28 rounded-full overflow-hidden mb-5 border-4 border-green-50 p-1 bg-white relative transition-transform duration-500 group-hover:scale-105'>
                            <img 
                                src={breed.image} 
                                alt={breed.name} 
                                className='w-full h-full object-cover rounded-full'
                            />
                        </div>

                     
                        <span className='text-[10px] bg-green-100 text-green-700 font-bold uppercase px-2.5 py-1 rounded-full tracking-widest mb-2'>
                            {breed.type}
                        </span>
                        <h3 className='font-bold text-xl text-gray-900 mb-1'>{breed.name}</h3>
                        <p className='text-xs text-gray-400 font-medium mb-3'>Origin: {breed.origin}</p>
                        <p className='text-sm text-gray-500 line-clamp-2 leading-relaxed px-1'>
                            {breed.desc}
                        </p>
                        
                      
                        <Link 
                            href="/animals" 
                            className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
                        >
                            <span>Explore Breed</span>
                            <FaArrowRight size={12} className="transform transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBreeds;
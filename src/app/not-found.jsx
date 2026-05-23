import Link from "next/link";
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-20'>
         
            <h1 className='text-[150px] font-black text-green-600 leading-none mb-4 animate-bounce'>
                404
            </h1>
            
           
            <h2 className='text-4xl font-black text-gray-900 mb-4'>
                Oops! Page not found
            </h2>
            <p className='text-gray-600 text-lg mb-8 max-w-md'>
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

           
            <Link 
                href="/" 
                className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-2xl transition shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
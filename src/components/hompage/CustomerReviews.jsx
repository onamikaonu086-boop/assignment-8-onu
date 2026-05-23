import React from 'react';
import { FaQuoteLeft, FaStar, FaUserTie } from 'react-icons/fa6';

const reviews = [
    {
        id: 1,
        name: "Abdur Rahman",
        location: "Dhaka",
        rating: 5,
        comment: "Excellent service! The Shahiwal cow I booked was exactly as described. Very healthy and well-fed. Highly recommended for hassle-free Qurbani."
    },
    {
        id: 2,
        name: "Kamrul Hasan",
        location: "Rajshahi",
        rating: 5,
        comment: "First time booking a goat online and QurbaniHat made it so easy. The Black Bengal goat was very active and the delivery was on time."
    },
    {
        id: 3,
        name: "Syed Anwar",
        location: "Chittagong",
        rating: 4,
        comment: "Very transparent platform. I loved how they provided accurate weight and age details. Saved me a lot of time avoiding the crowded haats."
    }
];

const CustomerReviews = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
       
            <div className='flex flex-col items-center text-center mb-10'>
                <div className='p-3 bg-green-50 rounded-full mb-3'>
                    <FaQuoteLeft className='text-green-600' size={20} />
                </div>
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                    Happy Customers
                </h2>
                <p className='text-gray-500 text-sm max-w-lg'>
                    See what our customers have to say about their livestock booking experience with QurbaniHat.
                </p>
            </div>

          
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {reviews.map((review) => (
                    <div 
                        key={review.id} 
                        className='bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 relative'
                    >
                  
                        <FaQuoteLeft className='absolute top-6 right-6 text-gray-50 opacity-50' size={40} />

              
                        <div className='flex gap-1 mb-4'>
                            {[...Array(review.rating)].map((_, i) => (
                                <FaStar key={i} className='text-orange-400' size={14} />
                            ))}
                        </div>

                    
                        <p className='text-sm text-gray-600 leading-relaxed mb-6 relative z-10'>
                            "{review.comment}"
                        </p>

                        <div className='flex items-center gap-3 border-t border-gray-50 pt-4'>
                            <div className='w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400'>
                                <FaUserTie size={18} />
                            </div>
                            <div>
                                <h4 className='font-bold text-gray-900 text-sm'>
                                    {review.name}
                                </h4>
                                <p className='text-xs text-gray-500'>
                                    From {review.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReviews;
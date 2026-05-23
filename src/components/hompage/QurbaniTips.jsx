import React from 'react';
import { FaLightbulb, FaCheck, FaShieldHeart, FaBookOpen } from 'react-icons/fa6';

const tips = [
    {
        id: 1,
        icon: <FaCheck className="text-green-600" size={22} />,
        title: "Identify Healthy Livestock",
        desc: "Ensure the animal is active, has bright eyes, a shiny coat, and shows no signs of limping or heavy breathing."
    },
    {
        id: 2,
        icon: <FaShieldHeart className="text-green-600" size={22} />,
        title: "Check Age & Teeth",
        desc: "For a valid Qurbani, a cow must be at least 2 years old and a goat must be 1 year old. Verify this by checking their front teeth."
    },
    {
        id: 3,
        icon: <FaBookOpen className="text-green-600" size={22} />,
        title: "Safe Transport & Care",
        desc: "Provide adequate food, clean water, and a stress-free environment for the animal at least 2 days before the sacrifice."
    }
];

const QurbaniTips = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className='flex items-center gap-2 mb-6'>
                <FaLightbulb className='text-orange-500' size={22} />
                <h2 className='text-2xl font-bold text-gray-800'>
                    Essential Qurbani Tips
                </h2>
            </div>

        
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {tips.map((tip) => (
                    <div 
                        key={tip.id} 
                        className='bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start'
                    >
                
                        <div className='p-3 bg-green-50 rounded-xl mb-4'>
                            {tip.icon}
                        </div>

                        <h3 className='font-bold text-lg text-gray-900 mb-2'>
                            {tip.title}
                        </h3>
                        <p className='text-sm text-gray-500 leading-relaxed'>
                            {tip.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QurbaniTips;
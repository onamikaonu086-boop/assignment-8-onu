import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa6';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='w-full bg-gray-950 text-gray-300 pt-16 pb-6 mt-20 border-t border-gray-800'>
            <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-left'>
                
           
                <div className='flex flex-col justify-start'>
                    <h2 className='text-2xl font-black text-green-500 tracking-tight mb-4'>
                        Qurbani<span className='text-orange-500'>Hat</span>
                    </h2>
                    <p className='text-gray-400 text-sm leading-relaxed'>
                        QurbaniHat is a modern digital livestock marketplace. We connect you with healthy, 
                        well-fed cows and goats from top local breeds, ensuring a hassle-free booking experience 
                        for your sacred sacrifice.
                    </p>
                </div>

            
                <div>
                    <h4 className='text-white font-bold text-lg mb-4 relative after:content-[""] after:block after:w-10 after:h-0.5 after:bg-green-500 after:mt-1'>
                        Contact Us
                    </h4>
                    <ul className='space-y-3 text-gray-400 text-sm'>
                        <li className='flex items-center gap-3'>
                            <FaEnvelope className='text-green-500' /> 
                            <span>support@qurbanihat.com</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <FaPhoneAlt className='text-green-500' /> 
                            <span>+880 1700-000000</span>
                        </li>
                        <li className='flex items-center gap-3'>
                            <FaMapMarkerAlt className='text-green-500' /> 
                            <span>Bogura & Rajshahi, Bangladesh</span>
                        </li>
                    </ul>
                </div>

          
                <div className='flex flex-col justify-start'>
                    <h4 className='text-white font-bold text-lg mb-4 relative after:content-[""] after:block after:w-10 after:h-0.5 after:bg-green-500 after:mt-1'>
                        Follow Us
                    </h4>
                    
                
                    <div className='flex gap-4 mb-6'>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='bg-gray-900 hover:bg-green-600 hover:text-white p-2.5 rounded-full transition-all text-gray-400'>
                            <FaFacebook size={18} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='bg-gray-900 hover:bg-green-600 hover:text-white p-2.5 rounded-full transition-all text-gray-400'>
                            <FaLinkedin size={18} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='bg-gray-900 hover:bg-green-600 hover:text-white p-2.5 rounded-full transition-all text-gray-400'>
                            <FaGithub size={18} />
                        </a>
                    </div>
                </div>

            </div>

            <div className='border-t border-gray-900 pt-6 text-center text-gray-500 text-xs'>
                <p>QurbaniHat &copy; {new Date().getFullYear()} - All Rights Reserved | Onamika Yeasmin Onu</p>
            </div>
        </footer>
    );
};

export default Footer;
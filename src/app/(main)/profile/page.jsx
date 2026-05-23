"use client";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';
import imgAvater from '@/assets/avater.jpg';
import Link from 'next/link';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    return (
        <div className='min-h-screen bg-gray-50 py-10 px-4'>
            <div className='bg-white p-8 border border-gray-100 rounded-3xl shadow-sm md:max-w-2xl mx-auto'>
          
                <div className='flex flex-col items-center mb-8'>
                    <Image
                        src={user?.image || imgAvater}
                        alt='user'
                        width={150}
                        height={150}
                        className='rounded-full object-cover border-4 border-green-100 shadow-md mb-6'
                    />
                    <div className='text-center'>
                        <h2 className='text-3xl font-black text-gray-900'>{user?.name}</h2>
                        <p className='text-gray-500 font-medium'>{user?.email}</p>
                    </div>
                </div>

                
                <div className='border border-gray-100 p-6 bg-gray-50/50 rounded-2xl mb-8'>
                    <h3 className='text-xl font-bold text-gray-800 mb-6'>Personal Information</h3>

                    <div className='space-y-4'>
                        {[
                            { label: "Name", value: user?.name },
                            { label: "Email", value: user?.email },
                            { label: "Photo URL", value: user?.image }
                        ].map((item, index) => (
                            <div key={index} className='flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3 gap-1'>
                                <span className='font-semibold text-gray-500'>{item.label}:</span>
                                <span className='text-gray-900 font-medium break-all sm:max-w-[60%]'>{item.value || "N/A"}</span>
                            </div>
                        ))}
                    </div>
                </div>

               
                <Link 
                    href="/update-profile" 
                    className='block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-xl transition shadow-md hover:shadow-lg'
                >
                    Edit Information
                </Link>
            </div>
        </div>
    );
};

export default ProfilePage;
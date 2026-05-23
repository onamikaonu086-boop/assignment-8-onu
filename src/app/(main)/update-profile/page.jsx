"use client";
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const UpdateProfilePage = () => {
    const { data: session } = authClient.useSession();

    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const image = formData.get("image");

        const { error } = await authClient.updateUser({ 
            name: name,
            image: image 
        });

        if (error) {
            toast.error('Update failed: ' + error.message);
        } else {
            toast.success('Profile updated successfully!');
        }

        setLoading(false);
    };

    return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12'>
            <div className='w-full max-w-lg bg-white p-8 rounded-3xl shadow-sm border border-gray-100'>
                <h2 className='text-3xl font-black text-gray-900 text-center mb-8'>
                    Update Profile
                </h2>

                <form onSubmit={handleUpdate} className='space-y-6'>
                    {/* Name Input */}
                    <div>
                        <label htmlFor='name' className='block mb-2 font-bold text-gray-700'>
                            Full Name
                        </label>
                        <input 
                            type="text"
                            name="name"
                            id='name'
                            defaultValue={session?.user?.name || ""}
                            placeholder='Enter your full name'
                            className='w-full border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition'
                        />
                    </div>

                    {/* Image URL Input */}
                    <div>
                        <label htmlFor='image' className='block mb-2 font-bold text-gray-700'>
                            Profile Image URL
                        </label>
                        <input 
                            type="text"
                            id='image'
                            name="image"
                            defaultValue={session?.user?.image || ""}
                            placeholder='Enter image URL'
                            className='w-full border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 transition'
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        disabled={loading}
                        className='w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition shadow-md disabled:opacity-60 disabled:cursor-not-allowed'
                    >
                        {loading ? 'Updating...' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
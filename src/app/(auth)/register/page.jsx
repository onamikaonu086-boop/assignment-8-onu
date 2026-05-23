"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { toast, Toaster } from 'react-hot-toast';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        const { email, name, photo, password } = data;
        const { error } = await authClient.signUp.email({
            name, email, password, image: photo, callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || 'Registration failed');
        } else {
            toast.success('Registration Successful!');
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({ provider: "google" });
    };

    return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center p-6'>
            <Toaster />
            <div className='bg-white p-8 border border-gray-100 rounded-3xl shadow-xl w-full max-w-md'>
                <h2 className='font-black text-3xl text-center mb-2'>Create Account</h2>
                <p className='text-gray-500 text-center mb-8'>Join QurbaniHat to book your livestock</p>

                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>
                    {['name', 'photo', 'email'].map((field) => (
                        <fieldset key={field} className="fieldset">
                            <legend className="fieldset-legend font-semibold mb-1 capitalize">{field}</legend>
                            <input type={field === 'email' ? 'email' : 'text'} className="input w-full p-3 border rounded-xl" placeholder={`Type your ${field}`} {...register(field, { required: `${field} is required` })} />
                            {errors[field] && <p className='text-red-600 text-xs mt-1'>{errors[field].message}</p>}
                        </fieldset>
                    ))}

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold mb-1">Password</legend>
                        <div className="relative">
                            <input type={isShowPassword ? "text" : "password"} className="input w-full p-3 border rounded-xl" placeholder="Type your password" {...register('password', { required: "Password is required" })} />
                            <span onClick={() => setIsShowPassword(!isShowPassword)} className="absolute right-3 top-3.5 cursor-pointer text-gray-500">
                                {isShowPassword ? <IoEye /> : <IoEyeOff />}
                            </span>
                        </div>
                        {errors.password && <p className='text-red-600 text-xs mt-1'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition">Register</button>
                </form>

                <div className="flex items-center my-6 text-gray-400 text-sm">
                    <div className="flex-grow border-t"></div>
                    <span className="px-4">Or continue with</span>
                    <div className="flex-grow border-t"></div>
                </div>

                <button onClick={handleGoogleSignin} className='flex items-center justify-center gap-2 w-full border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition font-semibold'>
                    <FcGoogle className='text-xl' /> Google
                </button>

                <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <Link href='/login' className='text-green-600 font-bold hover:underline'>Login</Link> </p>
            </div>
        </div>
    );
};

export default RegisterPage;
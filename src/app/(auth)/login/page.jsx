"use client";
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { toast, Toaster } from 'react-hot-toast'; 

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (data) => {
        const { error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message || 'Login Failed');
        } else {
            toast.success("Login Successful!");
            window.location.href = "/";
        }
    };

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({ provider: "google" });
    };

    return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center p-6'>
            <Toaster />
            <div className='bg-white p-8 border border-gray-100 rounded-3xl shadow-xl w-full max-w-md'>
                <h2 className='font-black text-3xl text-center mb-2'>Welcome Back</h2>
                <p className='text-gray-500 text-center mb-8'>Login to your QurbaniHat account</p>

                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold mb-1">Email</legend>
                        <input type="email" className="input w-full p-3 border rounded-xl" placeholder="Type your email" {...register('email', { required: "Email is required" })} />
                        {errors.email && <p className='text-red-600 text-xs mt-1'>{errors.email.message}</p>}
                    </fieldset>

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

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition">
                        Login
                    </button>
                </form>

                <div className="flex items-center my-6 text-gray-400 text-sm">
                    <div className="flex-grow border-t"></div>
                    <span className="px-4">Or continue with</span>
                    <div className="flex-grow border-t"></div>
                </div>

                <button onClick={handleGoogleSignin} className='flex items-center justify-center gap-2 w-full border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition font-semibold'>
                    <FcGoogle className='text-xl' /> Google
                </button>

                <p className="mt-6 text-center text-sm text-gray-600">Don't have an account? <Link href='/register' className='text-green-600 font-bold hover:underline'>Register</Link> </p>
            </div>
        </div>
    );
};

export default LoginPage;
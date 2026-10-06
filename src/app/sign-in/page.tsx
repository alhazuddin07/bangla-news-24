'use client';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const SignInPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { email: string, password: string };
        console.log(user);

        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: '/'
        });

        if (data) {
            toast.success("Sign in successfully");
            console.log(data);
        };

        if (error) {
            toast.error(error.message || 'Sign in failed');
            console.log("error from sign in page");
        };

    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    const handleGithubSignIn = async () => {
        await authClient.signIn.social({
            provider: "github",
        });
    };

    return (
        <div className='mt-10'>

            <h1 className='text-3xl text-red-700 py-3 text-center'>সাইন ইন</h1>

            <form onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box w-xs p-1">

                    <label className="label text-black text-[18px]">ইমেইল</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label text-black text-[18px]">পাসওয়ার্ড</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button type='submit' className="btn bg-red-700 text-white mt-4">সাইন ইন করুন</button>

                </fieldset>
            </form>

            <div className='flex flex-col'>
                <button onClick={handleGoogleSignIn} className='btn w-xs p-1 bg-amber-700 text-white'>Sign with Google</button>
                <button onClick={handleGithubSignIn} className='btn w-xs p-1 bg-amber-700 text-white'>Sign with GitHub</button>
            </div>

        </div>

    );
};

export default SignInPage;
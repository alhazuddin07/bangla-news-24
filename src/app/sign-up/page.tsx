'use client';

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as { name: string, image: string, email: string, password: string };
        console.log('userrrrr', user);

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: "/",
        });

        if (data) {
            toast.success("Sign up successfully");
            console.log(data);
            redirect('/');
        };

        if (error) {
            toast.error(error.message ?? 'Sign up failed');
            console.log(error);
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
            <h1 className='text-3xl text-red-700 py-3 text-center'>সাইন আপ</h1>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box w-xs p-1">

                    <label className="label text-black text-[18px]">নাম</label>
                    <input name='name' type="text" className="input" placeholder="Name" />

                    <label className="label text-black text-[18px]">Image</label>
                    <input name='image' type="url" className="input" placeholder="Image Url" />

                    <label className="label text-black text-[18px]">ইমেইল</label>
                    <input name='email' type="email" className="input" placeholder="Email" />

                    <label className="label text-black text-[18px]">পাসওয়ার্ড</label>
                    <input name='password' type="password" className="input" placeholder="Password" />

                    <button type='submit' className="btn bg-red-700 text-white mt-4">সাইন আপ করুন</button>
                </fieldset>
            </form>

            <div className='flex flex-col'>
                <button onClick={handleGoogleSignIn} className='btn w-xs p-1 bg-amber-700 text-white'>Sign with Google</button>
                <button onClick={handleGithubSignIn} className='btn w-xs p-1 bg-amber-700 text-white'>Sign with GitHub</button>
            </div>

        </div>
    );
};

export default SignUpPage;
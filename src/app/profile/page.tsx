'use client'

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newUserData = Object.fromEntries(formData.entries()) as { name: string, email: string };
        console.log(newUserData);

        await authClient.updateUser({
            ...newUserData
        });
    };

    return (
        <div className="py-2">
            <div className="flex justify-center items-center flex-col ">
                <div  className="pb-2">
                    <Link href={'/profile'}>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <Image alt="Tailwind-CSS-Avatar-component" src={user?.image || "/default-avatar.png"} width={50} height={50} />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col items-center">

                    <h1>{user?.name}</h1>
                    <p className="py-1">{user?.email}</p>
                    <button onClick={handleShow} className="btn">Edit Profile</button>

                </div>
            </div>

            {show && <form onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box w-xs p-1">

                    <h1 className="text-2xl font-bold text-center text-red-500 mt-4">Update Profile</h1>

                    <label className="label text-black text-[18px]">নাম</label>
                    <input name='name' type="text" className="input" placeholder="Name" />

                    <label className="label text-black text-[18px]">Image</label>
                    <input name='image' type="url" className="input" placeholder="Image Url" />

                    <button type='submit' className="btn bg-red-700 text-white mt-4">Update Profile</button>
                </fieldset>
            </form>}

        </div>
    );
};

export default ProfilePage;
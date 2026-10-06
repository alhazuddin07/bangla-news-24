'use client';

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";


const UserInfo = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log("ussssssssss", user);

    const handleSignOut = async () => {
        await authClient.signOut();
    }


    return (
        <div>
            {user ? <div className="flex items-center gap-4">

                <h1>{user?.name}</h1>

                <Link href={'/profile'}>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                            <Image alt="Tailwind-CSS-Avatar-component" src={user?.image || "/default-avatar.png"} width={50} height={50} />
                        </div>
                    </div>
                </Link>
                <Link href={"/sign-in"}><button onClick={handleSignOut} className="btn btn-error">Sign Out</button></Link>
            </div> : <div>
                <div className='flex gap-2'>
                    <Link href={'/sign-in'}><button className='btn'>সাইন ইন</button></Link>
                    <Link href={'/sign-up'}><button className='btn btn-error text-black'>সাইন আপ</button></Link>
                </div>
            </div>}
        </div>
    );
};

export default UserInfo;
import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';
import UserInfo from './UserInfo';

const Navbar = () => {

    const date = new Date().toLocaleDateString('bn-BD', {
        dateStyle: "full"
    })

    return (
        <div>
            <div className='flex justify-between container mx-auto p-4'>
                <div className='flex items-center gap-2 max-w-7xl mx-auto'>
                    <Image
                        className="h-10 w-10"
                        height={50}
                        width={50}
                        src={'/logo.webp'}
                        alt=""
                    />

                    <div>
                        <h1 className='text-2xl text-red-700 font-bold'>Bangla news 24</h1>
                        <p className='text-xs text-neutral-500'>{date}</p>
                    </div>

                </div>

                <UserInfo />

            </div>

            <NavLinks />

        </div>
    );
};

export default Navbar;
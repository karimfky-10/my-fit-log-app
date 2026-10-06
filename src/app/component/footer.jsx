import Image from 'next/image';
import React from 'react';


const Footer = () => {
    return (
        <div className='text-sm flex justify-between p-4 items-center h-50 container mx-auto'>
            <div className='flex items-center gap-3'>
                <Image src="/logo.png" alt="FitLog Logo"  width={25} height={40} priority/>
                <h1 className='text-xl text-white'>FITLOG</h1>    
            </div>
             <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;
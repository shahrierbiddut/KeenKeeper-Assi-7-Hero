import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { RiYoutubeFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] md:mt-20 mt-10'>
            <div className='md:max-w-[80%] mx-auto pt-10 pb-8 text-center'>
                <h2 className='font-bold md:text-6xl text-4xl text-white'>KeenKeeper</h2>
                <p className='text-gray-400 py-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                    <h5 className='font-semibold text-gray-300'>Social Links</h5>
                    <ul className='flex items-center justify-center gap-6 pt-2'>
                        <li className='rounded-full bg-white p-2'><RiYoutubeFill /></li>
                        <li className='rounded-full bg-white p-2'><BsFacebook /></li>
                        <li className='rounded-full bg-white p-2'><FaXTwitter /></li>
                    </ul>
                </div>
                <p className='border-b my-6 border-gray-600'></p>
                <div className='md:flex md:justify-between text-gray-400'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex md:justify-between justify-center gap-8 md:mt-0 mt-3'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

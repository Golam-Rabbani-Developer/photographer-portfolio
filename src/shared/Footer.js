import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
const Footer = () => {
    return (
        <div className=' mt-24 md:w-[85%] mx-auto text-center space-y-5'>
            {/* <div className='w-[400px] lg:w-[500px] h-[1px] bg-gray-500 mt-20 mx-auto  mb-12'></div> */}
            <h2 className='text-4xl font-extrabold font-dancing'>@ ..Shohan.. @</h2>
            <p className='text-gray-600 text-xl font-bold'>Email : shoan@gmail.com</p>
            <p className='text-gray-600 text-xl font-bold'>Phone : +880-8236482734</p>
            <div className="socials space-x-3">
                <span className='border border-gray-600 text-gray-600 inline-block rounded-full p-4 hover:bg-gray-600 hover:text-white'><BsFacebook /></span>
                <span className='border border-gray-600 text-gray-600 inline-block rounded-full p-4 hover:bg-gray-600 hover:text-white'><BsInstagram /></span>
                <span className='border border-gray-600 text-gray-600 inline-block rounded-full p-4 hover:bg-gray-600 hover:text-white'><BsLinkedin /></span>
                <span className='border border-gray-600 text-gray-600 inline-block rounded-full p-4 hover:bg-gray-600 hover:text-white'><BsTwitter /></span>
            </div>
            <p className='text-sm'>© Copyright 2020 Hernán Torres</p>
        </div>
    );
};

export default Footer;
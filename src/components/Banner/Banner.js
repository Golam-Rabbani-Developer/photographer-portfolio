import React from 'react';
import "./Banner.css"
import img3 from '../../utilitis/banner-3.jpg'
import { BiDownArrow } from 'react-icons/bi'

const Banner = () => {
    return (
        <div>
            <div>
                <div className='banner'>
                    <img className='h-[70vh] lg:h-[95vh] w-full' src={img3} alt="banner-img" />
                </div>
                <div className='absolute top-32 lg:top-1/3 left-12 md:left-80 text-start flex items-center
                 justify-center flex-col'>
                    <p className='text-gray-300'>
                        Your Celebration Is in my Eyes</p>
                    <h2 className='text-2xl lg:text-6xl font-bold text-gray-200'>Welcome to the virtual Eyes of Shohan</h2>
                    <p className='text-gray-300'>Sroll Down</p>
                    <span className='text-2xl lg:text-5xl text-gray-300 animated_icon mt-8'><BiDownArrow /></span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
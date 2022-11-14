import React from 'react';
import './GlobalBanner.css'

const GlobalBanner = ({ h2, h3, img }) => {

    return (
        <div className='global_banner flex justify-center items-center flex-col h-[50vh] md:h-[60vh]'>
            <img className='img-fluid h-[50vh] md:h-[60vh] w-[100%]' src={img} alt="" />
            <h2 style={{ zIndex: "99" }} className='global_banner_title text-4xl font-bold text-white'><span className='rounded-md border-b-4'>{h2}</span></h2>
            <h3 style={{ zIndex: "99" }} className='global_banner_title  mt-14 text-2xl font-bold text-white'>{h3}</h3>
        </div>
    );
};

export default GlobalBanner;
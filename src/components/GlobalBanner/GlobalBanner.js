import React from 'react';
import './GlobalBanner.css'

const GlobalBanner = () => {
    return (
        <div className='gloabal_banner flex items-center justify-center sticky top-1 -z-10'>
            <h2 className='text-3xl font-bold z-40 text-white font-mono'><span className='border-b-2'>Services/Add New</span></h2>
        </div>
    );
};

export default GlobalBanner;
import React from 'react';
import img from '../../src/utilitis/golam-rabbani.png'


const HomeAbout = () => {
    return (
        <div className='flex items-center justify-center flex-col  w-[95%] my-20 mx-auto md:w-[85%] gap-5'>
            <img className='rounded-full w-[300px] h-[300px] border-2 border-gray-600 shadow-xl' src={img} alt="" />
            <div className='space-y-5 text-center'>
                <h2><span className='font-dancing font-bold text-3xl text-gray-600'>@ ..Shohan.. @</span></h2>
                <p className='text-gray-500 text-xl'>Hi, it’s nice to meet you! My name is Amy Touchette. I’m a fine-art photographer based in Brooklyn, and I’ve been photographing for almost 20 years. I specialize in making portraits of strangers on the street both digitally and with film. Truth is stranger than fiction, and I’ve always been compelled by that fact, especially here in New York City. I’m represented by ClampArt, and I exhibit internationally. I’ve been published in The New York Times and my first monograph, Shoot the Arrow: A Portrait of The World Famous *BOB*, was published by Un-Gyve Press in 2013. I also work as a freelance photography writer for Digital Photo Pro magazine and other industry publications. Right now I’m really passionate about a series of portraits I’m making in my neighborhood, Bed-Stuy, Brooklyn. It would be great to stay in touch. Would you like to exchange business cards?</p>

                <div className="btn btn-outline min-w-[200px] z-50 border-gray-700 hover:bg-gray-500 hover:text-white rounded-none btn-lg mt-5 capitalize font-bold text-xl">Explore Me</div>
            </div>
        </div>
    );
};

export default HomeAbout;
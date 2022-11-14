import React from 'react';
import "./Album.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';




const data = [
    { id: 1, name: "Tour", picture: "https://iili.io/y2RJvs.jpg" },
    { id: 2, name: "Wedding", picture: "https://iili.io/y2RHan.jpg" },
    { id: 3, name: "Exclusive", picture: "https://iili.io/y2R93X.jpg" },
    { id: 4, name: "Exclusive", picture: "https://i.ibb.co/3C5cgC5/album-1-1.jpg" },
    { id: 5, name: "Exclusive", picture: "https://i.ibb.co/ryNTtzC/album-3-1.jpg" },
    { id: 6, name: "Exclusive", picture: "https://i.ibb.co/VDtFRhB/album-2-1.webp" },
]

const Albums = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-gray-600 text-center'>Have a Look At My Album</h2>
            <div className='mt-16  gap-4 w-[90%] mx-auto lg:w-[85%] flex-col grid grid-cols-1 md:grid-cols-3 '>
                <PhotoProvider>
                    {
                        data.map(item =>

                            <PhotoView key={item.id} src={item.picture} >
                                <img className='album_image cursor-zoom-in rounded-md hover:opacity-80  hover:scale-105' src={item.picture} alt="" />
                            </PhotoView>

                        )
                    }
                </PhotoProvider>

            </div>
            <div className='w-[400px] lg:w-[500px] h-[1px] bg-gray-500 mt-20 mx-auto  mb-12'></div>
        </div>
    );
};

export default Albums;
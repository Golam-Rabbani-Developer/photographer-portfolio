import React from 'react';
import "./Album.css"

// https://iili.io/y2RJvs.jpg
// 
// 
// 


const data = [
    { id: 1, name: "Tour", picture: "https://iili.io/y2RJvs.jpg" },
    { id: 1, name: "Wedding", picture: "https://iili.io/y2RHan.jpg" },
    { id: 1, name: "Exclusive", picture: "https://iili.io/y2R93X.jpg" },
]


const Albums = () => {
    return (
        <div>
            <div className='mt-16 flex items-center justify-center gap-4 w-[90%] mx-auto lg:w-[85%] flex-col md:flex-row '>
                {
                    data.map(item => <div className='relative album'>
                        <img className='album_image' src={item.picture} alt="" />
                        <div className='absolute text-white flex items-center flex-col left-36 top-20 justify-center album_heading'>
                            <h2 className='text-5xl font-extrabold'>{item.name}</h2>
                            <div className="btn border-white btn-outline mt-4 rounded-none  hover:bg-none">View More</div>
                        </div>
                    </div>)
                }
            </div>
            <div className='w-[400px] lg:w-[500px] h-[1px] bg-gray-500 mt-20 mx-auto  mb-12'></div>
        </div>
    );
};

export default Albums;
import React from 'react';
import "./Album.css"

const data = [
    { id: 1, name: "Tour", picture: "https://iili.io/y2RJvs.jpg" },
    { id: 2, name: "Wedding", picture: "https://iili.io/y2RHan.jpg" },
    { id: 3, name: "Exclusive", picture: "https://iili.io/y2R93X.jpg" },
]

const Albums = () => {
    return (
        <div>
            <div className='mt-16 flex items-center justify-center gap-4 w-[90%] mx-auto lg:w-[85%] flex-col md:flex-row '>
                {
                    data.map(item => <div key={item.id} className='relative album'>
                        <div className='album_image '>
                            <img className='' src={item.picture} alt="" />
                        </div>
                        <div className='album_heading absolute text-white items-center flex-col left-36 top-20 justify-center  flex'>
                            <h2 className='text-5xl font-extrabold'>{item.name}</h2>
                            <div className="btn border-white btn-outline mt-4 rounded-none text-white  hover:bg-none">View More</div>
                        </div>
                    </div>)
                }
            </div>
            <div className='w-[400px] lg:w-[500px] h-[1px] bg-gray-500 mt-20 mx-auto  mb-12'></div>
        </div>
    );
};

export default Albums;
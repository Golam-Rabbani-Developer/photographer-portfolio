import React, { useState } from 'react';
import { useReviews } from '../utilitis/useServices';

const Reviewshower = ({ id }) => {
    const [reviews, setReviews] = useState([])
    const { data: allreveiws } = useReviews(reviews, setReviews, id)

    return (
        <div className='flex items-start justify-start flex-col mt-16'>
            <h2 className='text-2xl font-bold text-gray-400 mt-4 font-mono'>{allreveiws.length > 0 ? 'Best Reviews Of This Service' : 'Scroll to Add Review'}</h2>
            {
                allreveiws?.map(review => <div className='flex items-center justify-center gap-3 mt-5'>
                    <img className='w-[90px] h-[90px] border p-4' src={review.picture} alt="" />
                    <div className='space-y-2'>
                        <h2 className='capitalize font-bold'>{review.name}</h2>
                        <p className='capitalize'><span className='font-semibold'>Comment </span>: {review.description}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Reviewshower;
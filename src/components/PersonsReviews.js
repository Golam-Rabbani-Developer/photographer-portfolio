
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RiArrowRightUpFill, RiDeleteBin5Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import auth from '../firebaseinit';
import Loading from '../shared/Loading';
import { handleDelte, usePersonsReviews } from '../utilitis/useServices';

const PersonsReviews = () => {
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()
    if (loading) {
        <Loading type='spokes' color='black'></Loading>
    }

    const [reviews, setReviews] = useState([])
    const { data } = usePersonsReviews(reviews, setReviews, user?.email)

    return (
        <div className=' w-[95%] md:w-[85%] mx-auto '>
            <h2 className='text-3xl font-bold text-gray-600'>Edit Review </h2>
            <div>
                {
                    data.length > 0 ? data?.map(review => <div key={review._id} className='flex items-start justify-start gap-3 mt-5'>
                        <img className='w-[90px] h-[90px] border p-4' src={review.picture} alt="" />
                        <div className='space-y-2'>
                            <h2 className='capitalize font-bold'>{review.name}</h2>
                            <p className='capitalize'><span className='font-semibold'>Comment </span>: {review.description}</p>
                            <div className='flex gap-4'>
                                <p onClick={() => navigate(`/reviews/${review._id}`)} className='flex gap-2 items-center border border-gray-400 px-2 cursor-pointer'>Edit <RiArrowRightUpFill /></p>
                                <p onClick={() => handleDelte(review._id)} className='text-red-700 border border-gray-400 p-2 cursor-pointer'><span><RiDeleteBin5Fill /></span></p>
                            </div>
                        </div>
                    </div>) : <Loading type='spokes' color='black' />
                }
            </div>
            {data.length < 0 && <div className='flex items-center justify-center text-2xl flex-col min-h-screen'><p>OOps !!</p><p>NO Data Found</p></div>}
        </div>
    );
};

export default PersonsReviews;
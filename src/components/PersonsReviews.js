import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebaseinit';
import Loading from '../shared/Loading';
import { usePersonsReviews } from '../utilitis/useServices';

const PersonsReviews = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        <Loading type='spokes' color='black'></Loading>
    }
    const [reviews, setReviews] = useState([])
    const { data } = usePersonsReviews(reviews, setReviews, user?.email)
    return (
        <div>
            {
                data.length > 0 ? data?.map(review => <div className='flex items-start justify-start gap-3 mt-5'>
                    <img className='w-[90px] h-[90px] border p-4' src={review.picture} alt="" />
                    <div className='space-y-2'>
                        <h2 className='capitalize font-bold'>{review.name}</h2>
                        <p className='capitalize'><span className='font-semibold'>Comment </span>: {review.description}</p>
                        <div className='flex gap-4'>
                            <p>Edit</p>
                            <p className='text-red-700'>Delete</p>
                        </div>
                    </div>
                </div>) : <div className='flex items-center justify-center text-2xl flex-col'><p>OOps !!</p><p>NO Data Found</p></div>
            }
        </div>
    );
};

export default PersonsReviews;
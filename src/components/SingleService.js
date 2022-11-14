import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebaseinit';
import { useSingleServices } from '../utilitis/useServices';
import ReviewSender from './ReviewSender';
import Reviewshower from './Reviewshower';

const SingleService = () => {
    const { id } = useParams()
    const URL = `https://photographer-portfolio-server-sygs.vercel.app/photographer-portfolio/services/getSingleService/${id}`
    const [service, setService] = useState([])
    const { data } = useSingleServices(service, setService, URL)
    const [user] = useAuthState(auth);
    return (
        <div className='bg-white'>
            <div className='pb-20'>
                <div className='flex items-center justify-center flex-col '>
                    {
                        data?.map(service => <div key={service._id} className='col-span-12 md:col-span-6'>
                            <div className='flex flex-col lg:flex-row items-start justify-center gap-4 md:p-6'>
                                <img className='border rounded-md' src={service.picture} alt="" />
                                <div>
                                    <h3 className='text-2xl font-bold text-gray-400 mt-4 font-mono'>{service.name}</h3>
                                    <p className='text-slate-600 text-md text-start mt-4'>{service.description}</p>
                                    <p className='mt-5 font-bold'><span className='text-gray-400 font-bold text-md'>Price</span> : $ {Math.floor(Math.random() * 100 + 10)}</p>

                                    {/* show all review  */}
                                    <Reviewshower id={id} />
                                </div>
                            </div>
                        </div>)
                    }
                </div>



                {/* send review to the server form  */}
                < ReviewSender id={id} />
            </div>
        </div>
    );
};

export default SingleService;
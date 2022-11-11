import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../utilitis/useServices';

const Services = () => {
    const url =`http://localhost:8000/photographer-portfolio/services/getAllService`
    const [services, setServices] = useState([])
    const { data } = useServices(services, setServices,url)
    const navigate = useNavigate()
    return (
        <div className=' text-center w-[95%] mx-auto md:w-[60%] mb-20'>
            <h2 className='text-3xl font-bold text-gray-600'>History Of my Services</h2>
            <div className='mt-10 grid grid-cols-12 gap-5'>
                {
                    data?.map(service => <div key={service._id} className='col-span-12 md:col-span-6'>
                        <div className='flex items-center justify-center flex-col'>
                            <img src={service.picture} alt="" />
                            <h3 className='text-2xl font-bold text-gray-400 mt-4 font-mono'>{service.name}</h3>
                            <div onClick={() => navigate(`service/${service._id}`)} className="btn btn-outline min-w-[200px] z-50 border-gray-700 hover:bg-gray-500 hover:text-white rounded-none btn-lg mt-5 capitalize font-bold text-xl">See Detail</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;
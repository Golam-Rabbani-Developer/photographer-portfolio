import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiArrowRightCircle } from 'react-icons/hi2'
import useServices from '../utilitis/useServices';

const Services = () => {
    const url = `http://localhost:8000/photographer-portfolio/services/getAllService`;
    const url2 = `http://localhost:8000/photographer-portfolio/services/getService`;
    const location = useLocation();
    const [services, setServices] = useState([]);
    const { data } = useServices(services, setServices, location.pathname === '/' || location.pathname === '/home' ? url2 : url);
    const navigate = useNavigate();
    return (
        <div className=' text-center w-[95%] mx-auto md:w-[60%] pb-20 relative '>
            <h2 className='text-3xl font-bold text-gray-600'>{location.pathname === '/service' || 'History Of my Services'}</h2>
            <div className='mt-10 grid grid-cols-12 gap-5'>
                {
                    data?.map(service => <div key={service._id} className='col-span-12 md:col-span-6'>
                        <div className='flex items-center justify-center flex-col'>
                            <img src={service.picture} alt="" />
                            <h3 className='text-2xl font-bold text-gray-400 mt-4 font-mono'>{service.name}</h3>
                            <p className='text-slate-600 text-lg text-start mt-4'>{service.description.length < 100 ? service.description : `${service.description.slice(0, 100)}....`}</p>
                            <div onClick={() => navigate(`/service/${service._id}`)} className="btn btn-outline min-w-[200px] z-50 border-gray-700 hover:bg-gray-500 hover:text-white rounded-none btn-lg mt-5 capitalize font-bold text-xl">See Detail</div>
                        </div>
                    </div>)
                }
            </div>
            <div onClick={() => navigate(`/service`)} className="btn border-0 btn-outline min-w-[200px] z-50 hover:bg-gray-500 hover:text-white rounded-none btn-lg mt-5 capitalize font-bold text-xl md:absolute top-[700px] right-[1px] space-x-2"><span>See All Services</span> <span className='text-2xl'><HiArrowRightCircle /></span></div>
        </div>
    );
};

export default Services;
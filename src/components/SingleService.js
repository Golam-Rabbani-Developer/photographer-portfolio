import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebaseinit';
import { useSingleServices } from '../utilitis/useServices';

const SingleService = () => {
    const { id } = useParams()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const URL = `http://localhost:8000/photographer-portfolio/services/getSingleService/${id}`
    const [service, setService] = useState([])
    const { data } = useSingleServices(service, setService, URL)
    let formData = new FormData();
    const apikey = '28eb00c7dfdf689359a738f32eec679d';
    const [user] = useAuthState(auth);
    const onSubmit = (data) => {
        const image = data.picture[0]
        formData.append("image", image)
        axios.post(`https://api.imgbb.com/1/upload?key=${apikey}`, formData)
            .then(result => {
                const picture = result.data.data.url;
                if (picture) {
                    data.picture = picture;
                    data.id = id;
                    axios.post('http://localhost:8000/photographer-portfolio/reviews/sendReviews', data)
                        .then(res => {
                            if (res.data.status === '200') {
                                toast("You have added a review successfully")
                            }
                        })
                        .catch(err => console.log(err))
                }
            })
        console.log(data)
    };
    return (
        <div>
            <div className='flex items-center justify-center flex-col'>
                {
                    data?.map(service => <div key={service._id} className='col-span-12 md:col-span-6'>
                        <div className='flex items-center justify-center flex-col'>
                            <img src={service.picture} alt="" />
                            <h3 className='text-2xl font-bold text-gray-400 mt-4 font-mono'>{service.name}</h3>
                            <p className='text-slate-600 text-md text-center mt-4'>{service.description}</p>
                        </div>
                    </div>)
                }
            </div>
            <div>
                <h2 className='text-2xl font-bold text-gray-400 mt-5 font-mono text-center'>Add A Review</h2>
                <div className='items-center mx-auto md:max-w-[500px] lg:max-w-[700px] '>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-5 ]'>
                            <p className='text-xl font-light mb-2'>Picture</p>
                            <input className="input input-bordered w-full " type='file'
                                {...register("picture", { required: true })}
                                aria-invalid={errors.picture ? "true" : "false"}
                                placeholder='png,jpg allowed only' />
                            {errors.picture?.type === 'required' && <p className='text-red-600' role="alert">Picture is required</p>}
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-light mb-2'>Name</p>
                            <input className="input input-bordered w-full " type='text'
                                {...register("name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {errors.name?.type === 'required' && <p className='text-red-600' role="alert">Name is required</p>}
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-light mb-2'>Email</p>
                            <input className="input input-bordered w-full " type='text'
                                {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"}
                                placeholder='' />
                            {errors.email?.type === 'required' && <p className='text-red-600' role="alert">Email is required</p>}
                        </div>

                        <div className='mt-5'>
                            <p className='text-xl font-light mb-2'>Review</p>
                            <textarea className="input input-bordered w-full  min-h-[200px]" type='text'
                                {...register("description", { required: true })}
                                aria-invalid={errors.desctiption ? "true" : "false"}
                            />
                            {errors.desctiption?.type === 'required' && <p className='text-red-600' role="alert">Picture is required</p>}

                        </div>
                        <div className='text-center'>
                            <input type="submit" placeholder="Type here" className="btn btn-outline min-w-[200px] z-50 border-gray-700 hover:bg-gray-500 hover:text-white rounded-none btn-lg mt-5 capitalize font-bold text-xl" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
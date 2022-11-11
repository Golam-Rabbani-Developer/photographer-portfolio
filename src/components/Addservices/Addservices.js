import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import './Addservices.css'
import Header from '../../shared/Header';
import axios from 'axios';
import { toast } from 'react-toastify';


const Addservices = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
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
                    data.reviews = [];
                    axios.post('http://localhost:8000/photographer-portfolio/services/addservice', data)
                        .then(res => {
                            if (res.data.status(200)) {
                                toast("You have added a service successfully")
                            }
                        })
                        .catch(err => console.log(err))
                }
            })
        console.log(data)
    };



    return (
        <div >
            <div className='addservice flex items-center justify-center sticky top-1 -z-10'>
                <h2 className='text-3xl font-bold z-40 text-white font-mono'><span className='border-b-2'>Services/Add New</span></h2>
            </div>

            <div className='p-6 z-50 bg-white'>
                <h2 className='text-3xl font-bold z-40 text-center font-mono'>ADD SERVICES</h2>
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
                            <p className='text-xl font-light mb-2'>Email</p>
                            <input className="input input-bordered w-full " type='text'
                                {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"}
                                placeholder='' />
                            {errors.email?.type === 'required' && <p className='text-red-600' role="alert">Email is required</p>}
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-light mb-2'>Service Name</p>
                            <input className="input input-bordered w-full " type='text'
                                {...register("name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                            />
                            {errors.name?.type === 'required' && <p className='text-red-600' role="alert">Name is required</p>}
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl font-light mb-2'>Description</p>
                            <textarea className="input input-bordered w-full  min-h-[400px]" type='text'
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

export default Addservices;
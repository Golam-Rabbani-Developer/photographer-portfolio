import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebaseinit';

const ReviewSender = ({ id }) => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    let formData = new FormData();
    const apikey = '28eb00c7dfdf689359a738f32eec679d';
    const URL = `http://localhost:8000/photographer-portfolio/services/getSingleService/${id}`

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
                            if (res.statusText === 'OK') {
                                toast("You have added a review successfully")
                                reset()
                            }
                        })
                        .catch(err => console.log(err))
                }
            })
    };

    return (
        <div>
            <h2 className='text-2xl font-bold text-gray-400 font-mono text-center mt-20'>Add Your Own Review</h2>
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
                        <input className="input input-bordered w-full " type='email' {...register("email", { required: true })} value={user?.email} />
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
    );
};

export default ReviewSender;
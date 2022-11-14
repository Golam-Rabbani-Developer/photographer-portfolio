import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebaseinit';
import { handleRegister } from '../utilitis/useServices';
import Loading from './Loading';
import Socials from './Socials';



const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    // adding loading spinner
    if (loading) {
        <Loading type="spokes" color="red"></Loading>
    }


    const hanldeLogin = (e) => {
        e.preventDefault()
        const data = { name, email, password }
        createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res) {
                    handleRegister(data, setMessage, navigate, from)
                }
            })
    }

    return (
        <div className='grid grid-cols-12 gap-0 min-h-screen'>
            <div className='flex items-center flex-col justify-center mx-auto p-10 border rounded-md md:col-span-4 order-2 lg:order-1 col-span-12'>
                <h2 className='text-3xl font-bold mb-8'>Sign Up</h2>
                <form onSubmit={hanldeLogin} className=' space-y-3'>
                    <input onBlur={(e) => setName(e.target.value)} type="text" placeholder="Name" className="input min-w-full input-bordered w-full max-w-xs" />

                    <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input min-w-full input-bordered w-full max-w-xs" />

                    <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="input min-w-full input-bordered w-full max-w-xs" />
                    <button className="btn btn-primary w-full">Sign Up</button>
                    <p className='mt-3 text-red-500 font-bold text-center'>{error && error?.message}</p>
                    <p className='mt-3 text-red-500 font-bold text-center'>{message && message}</p>
                </form>
                <p onClick={() => navigate('/login')} className='cursor-pointer  mt-3'>Already User ? Please Login</p>
                <Socials></Socials>
            </div>
            <div className='hidden md:block md:col-span-8 order-1 md:order-2'>
                <img className='w-[100%] min-h-screen' src="https://i.ibb.co/6FzfPhj/register-01-1.webp" alt="" />
            </div>
        </div>
    );
};

export default Signup;
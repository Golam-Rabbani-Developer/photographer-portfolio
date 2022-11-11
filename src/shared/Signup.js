import React, { useState } from 'react';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebaseinit';
import Loading from './Loading';
import Socials from './Socials';



const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth);



    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    //adding loading spinner
    if (loading) {
        return <Loading type="spokes" color="red"></Loading>
    }

    // checking the user 
    if (user) {
        navigate(from, { replace: true })
    }


    const hanldeLogin = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='flex items-center flex-col justify-center w-[430px] mx-auto p-10 border rounded-md mt-32'>
            <h2 className='text-3xl font-bold mb-8'>Sign Up</h2>
            <form onSubmit={hanldeLogin} className=' space-y-3'>
                <input onBlur={(e) => setName(e.target.value)} type="text" placeholder="Name" className="input min-w-full input-bordered w-full max-w-xs" />

                <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input min-w-full input-bordered w-full max-w-xs" />

                <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="input min-w-full input-bordered w-full max-w-xs" />
                <button className="btn btn-primary w-full">Sign Up</button>
                <p className='mt-3 text-red-500 font-bld'>{error && error?.message}</p>
            </form>
            <p onClick={() => navigate('/login')} className='cursor-pointer  mt-3'>Already User ? Please Login</p>
            <Socials></Socials>
        </div>
    );
};

export default Signup;
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from 'react-icons/bs'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebaseinit';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { handleRegister } from '../utilitis/useServices';
const Socials = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [message, setMessage] = useState('')
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    if (googleloading) {
        return <Loading type="spokes" color="black"></Loading>
    }


    const handleGoogle = () => {
        signInWithGoogle()
            .then(res => {
                if (res) {
                    if (googleuser) {
                        const newuser = googleuser.user;
                        const data = { name: newuser.displayName, email: newuser.email, password: 'googleuser' }
                        handleRegister(data, setMessage, navigate, from)
                        navigate(from, { replace: true })
                    }
                }
            })

    }

    return (
        <div>
            <p className='text-red-500 font-bold mt-4'>{googleerror && googleerror?.message}</p>
            <div className="divider">OR</div>
            <div className='flex items-center justify-center gap-4'>
                <span onClick={handleGoogle} className='border border-gray-300 cursor-pointer py-2  px-3 text-xl min-w-[100px] hover:border-slate-900 transition-all duration-300 delay-150 ease-in-out flex items-center justify-center rounded-3xl'><FcGoogle /></span>
            </div>
            <p className='text-xl font-bold text-red-500'>{message && message}</p>
        </div>
    );
};

export default Socials;
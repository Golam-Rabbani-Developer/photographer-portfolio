import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebaseinit';
import Socials from './Socials';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()


    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    // checking the user 
    if (user) {
        navigate(from, { replace: true })
    }

    // adding the loading spinner 
    if (sending || loading) {
        return <Loading type="spokes" color="red"></Loading>
    }

    const hanldeLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <div className='flex items-center flex-col justify-center w-[430px] mx-auto p-10 border rounded-md mt-40'>
            <h2 className='text-3xl font-bold mb-8'>Login</h2>
            <form onSubmit={hanldeLogin} className=' space-y-3'>
                <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input min-w-full input-bordered w-full max-w-xs" />
                {/* <p>{email || "Please Provide Email"}</p> */}
                <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="input min-w-full input-bordered w-full max-w-xs" />
                <p onClick={async () => {
                    email ? await sendPasswordResetEmail(email) : alert("Please Provide Email")
                }} className='text-end cursor-pointer'>Forget Password</p>
                <button className="btn btn-primary w-full">Login</button>
                <p onClick={() => navigate('/signup')} className='cursor-pointer  mt-3 text-center'>Now to Creative Mind ? Please SignUp</p>
                <p className='text-red-500 font-bold mt-4'>{reseterror || error ? error?.message || reseterror?.message : ""}</p>
            </form>
            <Socials></Socials>
        </div>
    );
};

export default Login;
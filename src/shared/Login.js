import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebaseinit';
import Socials from './Socials';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { handleLogin } from '../utilitis/useServices';


const Login = () => {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState('')
    const [password, setPassword] = useState("")
    const [sendPasswordResetEmail, sending, reseterror] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()


    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    // adding the loading spinner 
    if (sending || loading) {
        return <Loading type="spokes" color="red"></Loading>
    }

    const hanldeLogin = (e) => {
        e.preventDefault()
        const data = { email, password }
        signInWithEmailAndPassword(email, password)
            .then(res => {
                if (res) {
                    handleLogin(data, setMessage, navigate, from)
                }
            })
    }


    return (
        <div className='grid grid-cols-12 gap-0 min-h-screen'>
            <div className='flex items-center flex-col justify-center mx-auto p-10 border rounded-md md:col-span-4 order-2 lg:order-1 col-span-12 '>
                <h2 className='text-3xl font-bold mb-8 '>Login</h2>
                <form onSubmit={hanldeLogin} className=' space-y-3'>
                    <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input min-w-full input-bordered w-full max-w-xs" />
                    {/* <p>{email || "Please Provide Email"}</p> */}
                    <input onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="input min-w-full input-bordered w-full max-w-xs" />
                    <p onClick={async () => {
                        email ? await sendPasswordResetEmail(email) : alert("Please Provide Email")
                    }} className='text-end cursor-pointer'>Forget Password</p>
                    <button className="btn  w-full">Login</button>
                    <p onClick={() => navigate('/signup')} className='cursor-pointer  mt-3 text-center'>Now to Creative Mind ? Please SignUp</p>
                    <p className='text-red-500 font-bold mt-4'>{reseterror || error ? error?.message || reseterror?.message : ""}</p>
                    <p className='mt-3 text-red-500 font-bold text-center'>{message && message}</p>
                </form>
                <Socials></Socials>
            </div>
            <div className='hidden md:block md:col-span-8 order-1 md:order-2'>
                <img className='w-[100%] min-h-screen' src="https://i.ibb.co/353DGVg/login-01-1.jpg" alt="" />
            </div>
        </div>
    );
};

export default Login;
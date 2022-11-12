import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { BsMoonStars } from 'react-icons/bs'
import { signOut } from 'firebase/auth'
import Loading from './Loading';
import { ThemeContext } from '../App';
import auth from '../firebaseinit';
import setAuthToken from '../utilitis/setAuthtoken';



const token = JSON.parse(localStorage.getItem('token'))

if (token) {
    setAuthToken(token)
}

const Header = () => {
    const [user, loading] = useAuthState(auth)
    const [dark, setDark] = useContext(ThemeContext)

    if (loading) {
        return <Loading type="spokes" color="black"></Loading>
    }

    const links = <>
        <li><Link className='text-xl ' to='/'>Home</Link></li>
        <li><Link className='text-xl ' to='/service'>Services</Link></li>
        {
            user && <>
                <li><Link className='text-xl ' to='/addservices'>Add Services</Link></li>
                <li><Link className='text-xl ' to='/reviews'>My Reviews</Link></li>
            </>
        }
        <li><Link className='text-xl ' to='/blogs'>Blogs</Link></li>
    </>
    return (
        <div className={`w-[95%] mx-auto md:w-[85%] z-50 bg-none absolute top-0 md:left-24 text-white font-poppins`}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-gray-600">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <span className='hidden lg:block pl-4 font-dancing font-bold text-2xl'>Shohan..</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user
                            ?
                            <div className='flex items-center justify-center gap-2'>
                                <div className="avatar online tooltip_image cursor-pointer">
                                    <div className={`w-[50px] rounded-full`}>
                                        <img src="https://placeimg.com/192/192/people" alt='user-pic' />

                                    </div>
                                    <span className='font-bold absolute right-16 tooltip'>{user?.displayName}</span>
                                </div>
                                <span onClick={() => setDark(!dark)} className={`border px-3 py-[15px] transition-all duration-150  ease-out cursor-pointer  ${dark ? 'bg-black text-white' : 'text-black bg-white'}`}>  <BsMoonStars /></span>
                                <button onClick={() => signOut(auth)} className="btn btn-primary rounded-none ">Log Out</button>

                            </div>
                            :
                            <div className='flex gap-2 items-center justify-center'>
                                <span onClick={() => setDark(!dark)} className={`border px-3 py-[15px] transition-all duration-150  ease-out cursor-pointer ${dark ? 'bg-black text-white' : 'text-black bg-white'}`}>  <BsMoonStars /></span>
                                <Link to='/login' className="btn btn-outline z-50 bg-pink-200  hover:bg-white hover:text-black rounded-none  capitalize font-bold border-none text-xl">Login</Link>

                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;
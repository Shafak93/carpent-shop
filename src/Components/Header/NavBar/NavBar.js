import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IoIosLogIn, IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout =()=>{
        signOut(auth)
        localStorage.removeItem('accessToken');
    }
    const menu = 
        <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        {user && <li><Link to='/dashboard/myprofile'>{user && user.displayName}</Link></li>}
            <li>{user ? <button className="btn btn-ghost" onClick={logout}>Log out <IoIosLogOut size={20}></IoIosLogOut></button> : <Link to='/login'>Login <IoIosLogIn size={20}></IoIosLogIn> </Link>}</li>
       
        </>
    return (
        <div>
            <div className="navbar bg-transparent bg-purple-600 bg-opacity-60 text-white fixed top-0 z-50 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-600 bg-opacity-60 text-white rounded-box w-52">
                        {menu}
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case font-serif text-xl">Carpent Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal p-0 ">
                    {menu}
                    </ul>
                </div>
                </div>
        </div>
    );
};

export default NavBar;
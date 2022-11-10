import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const menuItems = <>
        <li><Link to='/' className="text-lg font-semibold">Home</Link></li>
        <li><Link to='/blog' className="text-lg font-semibold">Blog</Link></li>

        {
            user?.email ?
                <>
                    <li><Link to='/userReview' className="text-lg font-semibold">My Reviews</Link></li>
                    <li><Link to='/addService' className="text-lg font-semibold">Add Service</Link></li>
                    <li>
                        <button onClick={handleLogOut} className="text-lg font-semibold">Log Out</button>
                    </li>
                </>
                :
                <li><Link to='/login' className="text-lg font-semibold">Login</Link></li>
        }
    </>

    return (
        <div className="navbar h-10 mb-6 bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">
                    <img className='rounded-lg mr-2' style={{ width: '60px' }} src={logo} alt="" />
                    <Link style={{ textDecoration: 'none', color: 'black' }} className='font-bold text-2xl' to="/">Infinite snaps</Link>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Header;
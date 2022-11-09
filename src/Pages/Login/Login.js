import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content w-4/6">
                <div className="card w-full shadow-2xl bg-base-100 py-16">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="rounded-md text-center pb-4 btn-group-vertical lg:btn-group-horizontal">
                        <button className='btn btn-outline btn-info btn-xs mr-2'><FaGoogle className='mr-2'></FaGoogle>Google</button>
                        <button className='btn btn-outline btn-info btn-xs'><FaGithub className='mr-2'></FaGithub>Github</button>
                    </div>
                    <p className='text-center'>New to Infinite Snaps? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>


                </div>
            </div>
        </div>
    );
};

export default Login;
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/Hooks';

const Login = () => {
    useTitle('Login')
    const { logIn, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully login.')
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
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
                        <button onClick={handleGoogleSignIn} className='btn btn-outline btn-info btn-xs mr-2'><FaGoogle className='mr-2'></FaGoogle>Google</button>
                    </div>
                    <p className='text-center'>New to Infinite Snaps? <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>


                </div>
            </div>
        </div>
    );
};

export default Login;
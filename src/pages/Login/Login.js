import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/google.png'
import "./login.css"
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleSignIn = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password)

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then (res => res.json())
        .then (data => {
            console.log('SUCCESS DATA', data)
        })
        console.log({email})
    }

    if(user || userG){
        navigate(from, {replace: true})
    }
    return (
        <div className='login-container' data-aos="zoom-in-up" data-aos-duration="800">
            <h3 className='header-login'>Login</h3>
            <form onSubmit={handleSignIn} action="" className='p-4'>
                <div className="input-item">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmail} type="email" name="email" id=""/>
                </div>
                <div className="input-item">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePassword} type="password" name="password" id="" />
                </div>
                <div className="btn-item">
                    <button type='submit' className='login-btn btn fw-bold'>Login</button>
                    <p>New to our shop? <Link className='signup-link' to='/signup'>Create New Account</Link> </p>
                </div>
                <div className="or-item">
                    <div className="item"></div>
                    <span>OR</span>
                    <div className="item"></div>
                </div>
                <div onClick={() => signInWithGoogle()} className="google-sign mb-3">
                    <img className='google' src={google} alt="" />
                    <p className='w-100 fw-bold mt-3 text-center'>Sign in With Google</p>
                </div>
            </form>
        </div>
    );
};

export default Login;
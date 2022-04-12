import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailOnblur = event => {
        setEmail(event.target.value);
    }


    if (user) {
        navigate('/shop')
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleOnSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnblur} type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema Jhon? <Link className='form-link' to="/signup">Create an Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
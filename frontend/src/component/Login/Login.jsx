import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import { LoginUser, reset } from '../features/authSlice';
import logo from './logo.png'
import welcome from './welcome.png'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() =>{
        if(user || isSuccess){
            navigate("/mainpage")
        }
        dispatch(reset)
    }, [user, isSuccess, dispatch, navigate])

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(LoginUser({email, password}))
    }
    return (
        <div className='main-login'>
            <div className="login-container">
                <div className="left-side">
                    <div className="img-class">
                        <img className="img-id" src={logo} alt="logo" srcset="" />
                    </div>
                    <form onSubmit={handlesubmit}>
                        {isError && <p className='has-text-centered'>{message}</p>}
                        <label className="left-label" for="email">Email</label>
                        <input placeholder='Enter your email' type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" className='mail' />
                        <label className="left-label" for="pwd">Password</label>
                        <input placeholder='Enter your password' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id="pwd" />
                        <button type='submit' id="button" className='tombol'>{isLoading ? 'Loading...' : 'Submit'}</button>
                    </form>
                    <div className="footer">
                        <h5>Don't have an account? <Link className="link" style={{color:'blue'}} to='/register'>Sign Up</Link></h5>
                    </div>
                </div>
                <div className="right-side">
                    {/* <div className="welcome">
                    <h3>Welcome Back...</h3>
                </div> */}
                    <div className="welcomeimg">
                        <img className="welcome-img" src={welcome} alt="" srcset="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
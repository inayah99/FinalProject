import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './headlogo.png';
// import {useHistory}  from "react-router-dom";

const Register = () => {

    // const [emailreg,setemailreg]=useState('');
    // const [FirstName,setFirstName]=useState('');
    // const [LastName, setLastName]=useState('');
    // const [password1,setpassword1]=useState('');
    // const [confpass,setconfpass]=useState('');

    // new
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            <h1>register Successfull</h1>
            // navigate.push('/login')
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <div className='main-register'>

            <div className="left-side-reg">
                <div className="header">
                    <img className="logo-img" src={logo} alt="" />
                </div>
            </div>
            <div className="right-side-reg">
                <div className="body-right">
                    <div className="contain">
                        <p className='msg-text'>{msg}</p>
                        <h1>Create Account</h1>
                        <form onSubmit={Register}>
                            <div className="input-group">
                                <h5>Your Name
                                    <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} id="name" />
                                </h5>
                            </div>
                            {/* <div className="input-group">
                        <h5>Last Name
                        <input type="text" name="lastname" value={LastName} onChange={(e)=>{setLastName(e.target.value)}} id="lastname" />
                        </h5>
                    </div> */}
                            <div className="input-group">
                                <h5>email
                                    <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" />
                                </h5>
                            </div>
                            <div className="input-group">
                                <h5>Password
                                    <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} id="password" />
                                </h5>
                            </div>
                            <div className="input-group">
                                <h5>Confirm Password
                                    <input type="password" name="confPassword" value={confPassword} onChange={(e) => { setConfPassword(e.target.value) }} id="confPassword" />
                                </h5>
                            </div>
                            {/* <input className="sbtn" type="button" value="Submit" /> */}
                            <button className='sbtn' type='button' onClick={() => navigate.push('/')}>Submit</button>
                        </form>
                        <div className="buttom-center">
                            <h3>Already have an account?
                                <Link className="link-signin" to='/'>Login</Link>
                            </h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register
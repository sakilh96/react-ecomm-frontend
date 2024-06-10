import React, { useState } from 'react';
import userService from '../services/UserService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const LoginComponent = (props) => {
    // console.log('props',props);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginUser = async (e) => {
       e.preventDefault();
       try {
        const payload = {
            email: email,
            password: password
        }
        const login = await userService.logIn(payload);
        props.getUserLoginToken(login.data.token);
        // console.log('login',login.data.token);
        navigate('/profile');
        toast(login.data.message);
           
       }catch (err)
       {
        console.log('eeerr',err.response.data.message);
        toast(err.response.data.message);
       }
    }

    const goTo = () => {
        navigate('/signup')
    }
     return (
        <div className='container'>
            <div className='form-container'>
               <h2>Login</h2>
               <form onSubmit={loginUser}>
               <input type="email" placeholder='Email' onChange={(event)=> setEmail(event.target.value)} />
               <input type="password" placeholder='Password' onChange={(event)=> setPassword(event.target.value)} />
               <button type="submit">Login</button>
               </form>
               
            </div>
            <button onClick={goTo} className='sign-up-button'>Sign Up</button>
        </div>
     )
}


export default LoginComponent;
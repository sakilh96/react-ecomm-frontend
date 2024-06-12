import React, { useState } from 'react';
import userService from '../services/UserService';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'



const Signup = () => {
    const [name, setName] =  useState('');
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const navigate = useNavigate();

    const userRegister = async (e) => {
        e.preventDefault();

        try {
            const formData = {
                name: name,
                email: email,
                password: password
            };
           
            const signup = await userService.signUp(formData)
             if(signup.status === 200){
               
                navigate('/products');
                toast(signup.data.message);
             }

        } catch (err){

            console.log('err',err);

        }
      
    
    }

    const goTo = () => {
        navigate('/')
    }
    return (
        <div className="container">
            <div className="form-container">
                <h2>Register</h2>
                <form onSubmit={userRegister}>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
                    <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <input type="password" name="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit">Signup</button>
                </form>
            </div>
            <button onClick={goTo} className='sign-up-button'>Login</button>
        </div>
    );
}

export default Signup;

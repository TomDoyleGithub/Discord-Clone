import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import backdrop from '../images/AuthBackground.svg'
import logo from '../images/Discord-Logo-White.svg'
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

function Login() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value });
      };

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const mutationResponse = await login({ variables: {email: formState?.email, password: formState?.password,}})
            const token = mutationResponse?.data?.login?.token;
            Auth.login(token)
        } catch (err) {
            console.log('Something went wrong...')
        }
    }

    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <Fade bottom ssrFadeout>
            <section className='login-container'>
                <img className='auth-logo' alt='Discord Logo' src={logo}/>
                <form onSubmit={handleFormSubmit} className='form-container'>
                    <p className='header-font f600' style={{fontSize: "25px"}}>Welcome back!</p>
                    <p className='normal-font f300' style={{opacity: 0.7}}>We're so excited to see you again!</p>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>EMAIL</label>
                        <input onChange={handleChange} type='email' name='email' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD</label>
                        <input onChange={handleChange} type='password' name='password' className='input normal-font f300'/>
                    </div>
                    <button className='form-button normal-font' style={{marginTop: '20px'}}>Login</button>
                    <p className='normal-font f300' style={{opacity: 0.5, fontSize: "14px"}}>Need an account? <Link className='link f400' to='/register'>Register</Link> </p>
                </form>
            </section>
            </Fade>
        </div>
    )
}

export default Login

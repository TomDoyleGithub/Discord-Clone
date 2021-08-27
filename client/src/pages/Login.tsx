import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import backdrop from '../images/AuthBackground.svg'
import logo from '../images/Discord-Logo-White.svg'
import Auth from '../utils/auth';
import { LOGIN } from '../utils/mutations';

function Login() {
    const [disabled, setDisable] = useState(true);
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [formError, setError ] = useState(false);
    const [login] = useMutation(LOGIN);
    console.log(formError)

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
            setError(true);
        }
    };

    useEffect(() => {
        if (formState.email === '' || formState.password === '' ) {
            setDisable(true);
        } else {
            setDisable(false);
        }
    }, [formState])

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
                        {!formError ? (
                            <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>EMAIL</label>
                        ) : (
                            <label className='normal-font f500 login-label red-text' style={{fontSize: "12px", opacity: 0.7}}>EMAIL <i>- Login or password is invalid</i></label>
                        )}
                        <input onChange={handleChange} type='email' name='email' className={'normal-font f300 ' + (!formError ? 'input' : 'red-input')}/>
                    </div>
                    <div className='input-container'>
                        {!formError ? (
                            <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD</label>
                        ) : (
                            <label className='normal-font f500 login-label red-text' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD <i>- Login or password is invalid</i></label>
                        )}
                        <input onChange={handleChange} type='password' name='password' className={'normal-font f300 ' + (!formError ? 'input' : 'red-input')}/>
                    </div>
                    <button disabled={disabled} className='form-button normal-font' style={{marginTop: '20px'}}>Login</button>
                    <p className='normal-font f300' style={{opacity: 0.5, fontSize: "14px"}}>Need an account? <Link className='link f400' to='/register'>Register</Link> </p>
                </form>
            </section>
            </Fade>
        </div>
    )
}

export default Login

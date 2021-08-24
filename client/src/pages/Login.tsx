import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import backdrop from '../images/AuthBackground.svg'
import logo from '../images/Discord-Logo-White.svg'

function Login() {
    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <Fade bottom ssrFadeout>
            <section className='login-container'>
                <img className='auth-logo' alt='Discord Logo' src={logo}/>
                <form className='form-container'>
                    <p className='header-font f600' style={{fontSize: "25px"}}>Welcome back!</p>
                    <p className='normal-font f300' style={{opacity: 0.7}}>We're so excited to see you again!</p>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>EMAIL</label>
                        <input type='email' name='email' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD</label>
                        <input type='password' name='password' className='input normal-font f300'/>
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

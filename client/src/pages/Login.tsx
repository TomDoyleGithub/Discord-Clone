import React from 'react'
import backdrop from '../images/AuthBackground.svg'

function Login() {
    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <section className='login-container'>
                <form className='form-container'>
                    <p className='header-font f600' style={{fontSize: "25px"}}>Welcome back!</p>
                    <p className='normal-font f300' style={{opacity: 0.7}}>We're so excited to see you again!</p>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>EMAIL</label>
                        <input name='email' className='input'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD</label>
                        <input name='password' className='input'/>
                    </div>
                    <button className='form-button normal-font' style={{marginTop: '20px'}}>Login</button>
                    <p className='normal-font f300' style={{opacity: 0.5, fontSize: "14px"}}>Need an account? Register</p>
                </form>
            </section>
        </div>
    )
}

export default Login

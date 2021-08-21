import React from 'react'
import { Redirect } from 'react-router'
import backdrop from '../images/AuthBackground.svg'

function Login({user}) {
    if (user){ return <Redirect to='/'/>}
    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <section className='login-container'>
                <form className='form-container'>
                    <p>Welcome Back!</p>
                    <p>We're so excited to see you again!</p>
                </form>
            </section>
        </div>
    )
}

export default Login

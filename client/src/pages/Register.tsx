import React from 'react'
import { Redirect } from 'react-router'
import backdrop from '../images/AuthBackground.svg'

function Register({user}) {
    if (user){ return <Redirect to='/'/>}
    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <section className='register-container'>

            </section>
        </div>
    )
}

export default Register

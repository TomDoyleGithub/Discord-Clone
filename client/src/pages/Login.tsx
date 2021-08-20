import React from 'react'
import backdrop from '../images/AuthBackground.svg'

function Login() {
    return (
        <div className='fullscreen'>
            {/* Fix Backdrop Styling */}
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <section className='auth-container'>

            </section>
        </div>
    )
}

export default Login

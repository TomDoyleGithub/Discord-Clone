import React from 'react'
import Fade from 'react-reveal/Fade';
import backdrop from '../images/AuthBackground.svg'

function Register() {
    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <Fade bottom ssrFadeout>
            <section className='register-container'>

            </section>
            </Fade>
        </div>
    )
}

export default Register

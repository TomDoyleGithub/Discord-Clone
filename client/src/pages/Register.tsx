import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import backdrop from '../images/AuthBackground.svg'

function Register() {
    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <Fade bottom ssrFadeout>
            <section className='register-container'>
                <form className='form-container' style={{position: 'relative', bottom: '13px'}}>
                    <p className='header-font f600' style={{fontSize: "25px", textAlign: 'center'}}>Create an account</p>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>EMAIL</label>
                        <input type='email' name='email' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>USERNAME</label>
                        <input type='name' name='name' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD</label>
                        <input type='password' name='password' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>DATE OF BIRTH</label>
                        <div className='dropdown-container'>
                            <input className='input normal-font f300' placeholder='Select' style={{fontSize: '18px', width: '150px'}}/>
                            <input className='input normal-font f300' placeholder='Select' style={{fontSize: '18px', width: '100px'}}/>
                            <input className='input normal-font f300' placeholder='Select' style={{fontSize: '18px', width: '120px'}}/>
                        </div>
                    </div>
                    <button className='form-button normal-font' style={{marginTop: '11px'}}>Continue</button>
                    <p className='normal-font f300' style={{fontSize: "14px"}}><Link className='link f400' to='/login' style={{opacity: 1}}>Already have an account?</Link> </p>
                    <p className='normal-font f300' style={{fontSize: "12px", opacity: 0.3, marginTop: '12px'}}>By registering, you agree to Discord's Terms of Service and Privacy Policy</p>
                </form>
            </section>
            </Fade>
        </div>
    )
}

export default Register

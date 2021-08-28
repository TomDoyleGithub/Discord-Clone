import React from 'react'
import backdrop from '../images/AuthBackground.svg';
import logo from '../images/Discord-Logo-White.svg';
import reset from '../images/reset-password.svg';

function ResetPassword({user}) {
    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <section className='reset-container'>
                <img className='auth-logo' alt='Discord Logo' src={logo}/>
                <form className='form-container'>
                    <img style={{paddingBottom: '17px'}} src={reset} alt='Reset Icon'/>
                    <p className='header-font f600' style={{fontSize: "25px", margin: 'auto'}}>Change Your Password</p>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>NEW PASSWORD</label>
                        <input type='password' name='password' className='normal-font f300 input'/>
                    </div>
                    <button className='form-button normal-font' style={{marginTop: '10px'}}>Change Password</button>
                </form>
            </section>
        </div>
    )
}

export default ResetPassword

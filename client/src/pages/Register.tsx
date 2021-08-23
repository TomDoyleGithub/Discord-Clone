import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import backdrop from '../images/AuthBackground.svg'

function Register() {
    const [mmActive, setmmActive] = useState(false);
    const [ddActive, setddActive] = useState(false);
    const [yyActive, setyyActive] = useState(false);

    const handleClick = (e) =>  {
        switch (e.target.name) {
            case 'mm':
                setmmActive(!mmActive);
                break;
            case 'dd':
                setddActive(!ddActive);
                break;
            case 'yy':
                setyyActive(!yyActive);
                break;
        }
    };

    useEffect(() => {
        const pageClickEvent = (e) => {
          setmmActive(false);
          setddActive(false);
          setyyActive(false);
        };
      
        if (mmActive || ddActive || yyActive) {
          window.addEventListener('click', pageClickEvent);
        }
      
        return () => {
          window.removeEventListener('click', pageClickEvent);
        }
      
      }, [mmActive, ddActive, yyActive]);

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
                            <section className='full-dropdown'>
                                <section className={mmActive ? 'selection' : 'none'} style={{width: '150px'}}></section>
                                <input name='mm' onClick={handleClick} className='input normal-font f300' placeholder='Select' style={{fontSize: '18px', width: '150px', cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <section className={ddActive ? 'selection' : 'none'} style={{width: '100px'}}></section>
                                <input name='dd' onClick={handleClick} className='input normal-font f300' placeholder='Select' style={{fontSize: '18px', width: '100px', cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <section className={yyActive ? 'selection' : 'none'}  style={{width: '122px'}}></section>
                                <input name='yy' onClick={handleClick} className='input normal-font f300' placeholder='Select' style={{fontSize: '18px', width: '120px', cursor: 'default'}}/>
                            </section>
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

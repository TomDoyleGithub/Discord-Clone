import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import backdrop from '../images/AuthBackground.svg'
import dropArrow from '../images/white-down-arrow.png'
import { days, months, years } from '../utils/TimeFunctions';
function Register() {
    const [realMonth, setMonth] = useState('');
    const [realDay, setDay] = useState('');
    const [realYear, setYear] = useState('');
    const [mmActive, setmmActive] = useState(false);
    const [ddActive, setddActive] = useState(false);
    const [yyActive, setyyActive] = useState(false);

    const handleClick = (e:any) =>  {
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

    const clickDob = (e:any) => {
        const data = e.target.getAttribute("data-value");
        switch (e.target.getAttribute("data-name")) {
            case 'month':
                setMonth(data);
                break;
            case 'day':
                setDay(data);
                break;
            case 'year':
                setYear(data);
                break;
        }
    }

    // Closes the selection menu when you click outside the container
    useEffect(() => {
        const pageClickEvent = (e:any) => {
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
                                <img className='dropdown-icon' alt='Arrow' src={dropArrow}/>
                                <section className={mmActive ? 'selection' : 'none'} style={{width: '150px'}}>
                                {months.map((month, i) => (
                                        <p key={i} data-value={month} data-name='month' onClick={clickDob}>{month}</p>
                                    ))}
                                </section>
                                <input readOnly defaultValue={realMonth} name='mm' onClick={handleClick} className='input normal-font f300' placeholder='Select' style={{width: '150px', cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <img className='dropdown-icon' alt='Arrow' src={dropArrow}/>
                                <section className={ddActive ? 'selection' : 'none'} style={{width: '100px'}}>
                                    {days.map((day, i) => (
                                        <p key={i} data-value={day} data-name='day' onClick={clickDob}>{day}</p>
                                    ))}
                                </section>
                                <input readOnly defaultValue={realDay} name='dd' onClick={handleClick} className='input normal-font f300' placeholder='Select' style={{width: '100px', cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <img className='dropdown-icon' alt='Arrow' src={dropArrow}/>
                                <section className={yyActive ? 'selection' : 'none'}  style={{width: '122px'}}>
                                    {years?.map((item:string , i:number) => (
                                        <p key={i} data-value={item} data-name='year' onClick={clickDob}>{item}</p>
                                    ))}
                                </section>
                                <input readOnly defaultValue={realYear} name='yy' onClick={handleClick} className='input normal-font f300' placeholder='Select' style={{width: '120px', cursor: 'default'}}/>
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
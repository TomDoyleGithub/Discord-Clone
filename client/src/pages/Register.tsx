import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import backdrop from '../images/AuthBackground.svg'
import dropArrow from '../images/white-down-arrow.png'
import { days, months, years } from '../utils/TimeFunctions';
import Auth from '../utils/auth';
import logo from '../images/Discord-Logo-White.svg'
import { useMutation } from '@apollo/client';
import { REGISTER } from '../utils/mutations';

function Register() {
    const [disabled, setDisable] = useState(true);
    const [formState, setFormState] = useState({ email: '', username: '', password: ''});
    const [dateState, setDateState] = useState({ realMonth: '', realDay: '', realYear: ''});
    const [clickState, setClickState] = useState({ mmActive: false, ddActive: false, yyActive: false});
    const [register] = useMutation(REGISTER);

    const handleClick = (e:any) =>  {
        const boxName = e.target.name;
        setClickState({...clickState, [boxName]: true})
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value });
      };

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const mutationResponse = await register({ variables: {email: formState.email, username: formState.username, password: formState.password, birthday: `${dateState.realMonth} | ${dateState.realDay} | ${dateState.realYear}` }});
            const token = mutationResponse?.data?.register?.token;
            Auth.login(token)
        } catch (err) {
            console.log('Something went wrong...')
        }
    };

    const clickDob = (e:any) => {
        const data = e.target.getAttribute("data-value");
        const dateType = e.target.getAttribute("data-name");
        setDateState({...dateState, [dateType]: data});
    }

    // Use effect that disables the form submit button
    useEffect(() => {
        if (formState.email === '' || formState.username === '' || formState.password === '' || dateState.realDay === '' || dateState.realMonth === '' || dateState.realYear) {
            setDisable(true);
        } else {
            setDisable(false);
        }
    }, [formState, dateState])

    // Closes the selection menu when you click outside the container
    useEffect(() => {
        const pageClickEvent = (e:any) => {
          setClickState({...clickState, mmActive: false, ddActive: false, yyActive: false});
        };
      
        if (clickState.mmActive || clickState.ddActive || clickState.yyActive) {
          window.addEventListener('click', pageClickEvent);
        }
      
        return () => {
          window.removeEventListener('click', pageClickEvent);
        }
      
      }, [clickState.mmActive, clickState.ddActive, clickState.yyActive, clickState]);

    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <Fade bottom ssrFadeout>
            <section className='register-container'>
                <img className='auth-logo' alt='Discord Logo' src={logo}/>
                <form onSubmit={handleFormSubmit} className='form-container' style={{position: 'relative', bottom: '13px'}}>
                    <p className='header-font f600' style={{fontSize: "25px", textAlign: 'center'}}>Create an account</p>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>EMAIL</label>
                        <input onChange={handleChange} type='email' name='email' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>USERNAME</label>
                        <input onChange={handleChange} type='name' name='username' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD</label>
                        <input onChange={handleChange} type='password' name='password' className='input normal-font f300'/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>DATE OF BIRTH</label>
                        <div className='dropdown-container'>
                            <section className='full-dropdown'>
                                <img className='dropdown-icon' alt='Arrow' src={dropArrow}/>
                                <section className={clickState.mmActive ? 'selection' : 'none'} style={{width: '150px'}}>
                                {months.map((month, i) => (
                                        <p key={i} data-value={month} data-name='realMonth' onClick={clickDob}>{month}</p>
                                    ))}
                                </section>
                                <input readOnly defaultValue={dateState.realMonth} name='mmActive' onClick={handleClick} className='input dropdown-input normal-font f300' placeholder='Select' style={{cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <img className='dropdown-icon' alt='Arrow' src={dropArrow}/>
                                <section className={clickState.ddActive ? 'selection' : 'none'} style={{width: '100px'}}>
                                    {days.map((day, i) => (
                                        <p key={i} data-value={day} data-name='realDay' onClick={clickDob}>{day}</p>
                                    ))}
                                </section>
                                <input readOnly defaultValue={dateState.realDay} name='ddActive' onClick={handleClick} className='input dropdown-input  normal-font f300' placeholder='Select' style={{cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <img className='dropdown-icon' alt='Arrow' src={dropArrow}/>
                                <section className={clickState.yyActive ? 'selection' : 'none'}  style={{width: '122px'}}>
                                    {years?.map((item:string , i:number) => (
                                        <p key={i} data-value={item} data-name='realYear' onClick={clickDob}>{item}</p>
                                    ))}
                                </section>
                                <input readOnly defaultValue={dateState.realYear} name='yyActive' onClick={handleClick} className='input dropdown-input  normal-font f300' placeholder='Select' style={{cursor: 'default'}}/>
                            </section>
                        </div>
                    </div>
                    <button disabled={disabled} className='form-button normal-font' style={{marginTop: '11px'}}>Continue</button>
                    <p className='normal-font f300' style={{fontSize: "14px"}}><Link className='link f400' to='/login' style={{opacity: 1}}>Already have an account?</Link> </p>
                    <p className='normal-font f300' style={{fontSize: "12px", opacity: 0.3, marginTop: '12px', lineHeight: '18px'}}>By registering, you agree to Discord's Terms of Service and Privacy Policy</p>
                </form>
            </section>
            </Fade>
        </div>
    )
}

export default Register

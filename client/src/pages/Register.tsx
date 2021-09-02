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
import ThreeDotsWave from '../components/ThreeDotsWave';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { TOGGLE_DISABLE, TOGGLE_ERROR, TOGGLE_LOAD, UPDATE_FORM } from '../redux/actions';

function Register() {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStateOrAny) => state);
    const [register] = useMutation(REGISTER);

    const [clickState, setClickState] = useState({ mmActive: false, ddActive: false, yyActive: false});

    const handleClick = (e:any) =>  {
        const boxName = e.target.name;
        setClickState({...clickState, [boxName]: true})
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        dispatch({ type: UPDATE_FORM, name, value});
        dispatch({ type: TOGGLE_DISABLE, value: false });
      };

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();
        try {
            dispatch({ type: TOGGLE_LOAD });
            const mutationResponse = await register({ variables: {email: state.email, username: state.username, password: state.password, birthday: `${state.realMonth} | ${state.realDay} | ${state.realYear}` }});
            const token = await mutationResponse?.data?.register?.token;
            Auth.login(token);
            dispatch({ type: TOGGLE_LOAD });
        } catch (err) {
            dispatch({ type: TOGGLE_LOAD });
            dispatch({ type: TOGGLE_ERROR, value: true });
        }
    };

    const clickDob = (e:any) => {
        const value = e.target.getAttribute("data-value");
        const name = e.target.getAttribute("data-name");
        dispatch({ type: UPDATE_FORM, name, value});
    };

    useEffect(() => {
        dispatch({ type: TOGGLE_DISABLE, value: true });
        dispatch({ type: TOGGLE_ERROR, value: false });
    }, [dispatch]);

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
                        <input required onChange={handleChange} type='email' name='email' maxLength={30}  className={'normal-font f300 ' + (!state.error ? 'input' : 'red-input')}/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>USERNAME</label>
                        <input required onChange={handleChange} type='name' maxLength={30} name='username' className={'normal-font f300 ' + (!state.error ? 'input' : 'red-input')}/>
                    </div>
                    <div className='input-container'>
                        <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD</label>
                        <input required onChange={handleChange} type='password' name='password' className={'normal-font f300 ' + (!state.error ? 'input' : 'red-input')}/>
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
                                <input required readOnly defaultValue={state.realMonth} name='mmActive' onClick={handleClick}  className={'dropdown-input normal-font f300 ' + (!state.error ? 'input' : 'red-input')} placeholder='Select' style={{cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <img className='dropdown-icon' alt='Arrow' src={dropArrow}/>
                                <section className={clickState.ddActive ? 'selection' : 'none'} style={{width: '100px'}}>
                                    {days.map((day, i) => (
                                        <p key={i} data-value={day} data-name='realDay' onClick={clickDob}>{day}</p>
                                    ))}
                                </section>
                                <input required readOnly defaultValue={state.realDay} name='ddActive' onClick={handleClick} className={'dropdown-input normal-font f300 ' + (!state.error ? 'input' : 'red-input')} placeholder='Select' style={{cursor: 'default'}}/>
                            </section>
                            <section className='full-dropdown'>
                                <img className='dropdown-icon' alt='Arrow' src={dropArrow}/>
                                <section className={clickState.yyActive ? 'selection' : 'none'}  style={{width: '122px'}}>
                                    {years?.map((item:string , i:number) => (
                                        <p key={i} data-value={item} data-name='realYear' onClick={clickDob}>{item}</p>
                                    ))}
                                </section>
                                <input required readOnly defaultValue={state.realYear} name='yyActive' onClick={handleClick} className={'dropdown-input normal-font f300 ' + (!state.error ? 'input' : 'red-input')} placeholder='Select' style={{cursor: 'default'}}/>
                            </section>
                        </div>
                    </div>
                    {state?.loading ? (
                        <button disabled={state.disable} className='form-button normal-font' style={{marginTop: '11px'}}><ThreeDotsWave/></button>
                    ) : (
                        <button disabled={state.disable} className='form-button normal-font' style={{marginTop: '11px'}}>Continue</button>
                    )}
                    <Link className='link f400 normal-font' to='/login' style={{opacity: 1, fontSize: "14px"}}>Already have an account?</Link>
                    <p className='normal-font f300' style={{fontSize: "12px", opacity: 0.3, marginTop: '12px', lineHeight: '18px'}}>By registering, you agree to Discord's Terms of Service and Privacy Policy</p>
                </form>
            </section>
            </Fade>
        </div>
    )
}

export default Register

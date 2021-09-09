import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import PasswordModal from '../components/PasswordModal';
import backdrop from '../images/AuthBackground.svg'
import logo from '../images/Discord-Logo-White.svg'
import Auth from '../utils/auth';
import { LOGIN, SEND_PASSWORD } from '../utils/mutations';
import ThreeDotsWave from '../components/ThreeDotsWave';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { TOGGLE_LOAD, UPDATE_FORM, TOGGLE_ERROR, TOGGLE_DISABLE } from '../redux/actions';

function Login() {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStateOrAny) => state);

    const [modal, setModal] = useState(false);
    const [login] = useMutation(LOGIN);
    const [sendPassword] = useMutation(SEND_PASSWORD);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        dispatch({ type: UPDATE_FORM, name, value});
        dispatch({ type: TOGGLE_DISABLE, value: false });
      };

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();

        try {
            dispatch({ type: TOGGLE_LOAD });
            const mutationResponse = await login({ variables: {email: state?.email, password: state?.password,}})
            const token = await mutationResponse?.data?.login?.token;
            Auth.login(token)
            dispatch({ type: TOGGLE_LOAD });
            dispatch({ type: TOGGLE_ERROR, value: false });
        } catch (err) {
            dispatch({ type: TOGGLE_LOAD });
            dispatch({ type: TOGGLE_ERROR, value: true });
        }
    };

    const forgotPassword = async () => {
        try {
            await sendPassword({ variables: {email: state?.email}});
            setModal(true);
            dispatch({ type: TOGGLE_ERROR, value: false });
        } catch (err) {
            dispatch({ type: TOGGLE_ERROR, value: true });
        }
    };

    useEffect(() => {
        dispatch({ type: TOGGLE_DISABLE, value: true });
        dispatch({ type: TOGGLE_ERROR, value: false });
    }, [dispatch]);
   
    return (
        <div className='fullscreen'>
            <PasswordModal modal={modal} setModal={setModal} email={state?.email}/>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <Fade bottom ssrFadeout>
            <section className='login-container'>
                <img className='auth-logo' alt='Discord Logo' src={logo}/>
                <form onSubmit={handleFormSubmit} className='form-container'>
                    <p className='header-font f600' style={{fontSize: "25px"}}>Welcome back!</p>
                    <p className='normal-font f300' style={{opacity: 0.7}}>We're so excited to see you again!</p>
                    <div className='input-container'>
                        {!state.error ? (
                            <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>EMAIL</label>
                        ) : (
                            <label className='normal-font f500 login-label red-text' style={{fontSize: "12px", opacity: 0.7}}>EMAIL <i>- Login or password is invalid</i></label>
                        )}
                        <input onChange={handleChange} type='email' name='email' className={'normal-font f300 ' + (!state.error ? 'input' : 'red-input')}/>
                    </div>
                    <div className='input-container'>
                        {!state.error ? (
                            <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD</label>
                        ) : (
                            <label className='normal-font f500 login-label red-text' style={{fontSize: "12px", opacity: 0.7}}>PASSWORD <i>- Login or password is invalid</i></label>
                        )}
                        <input onChange={handleChange} type='password' name='password' className={'normal-font f300 ' + (!state.error ? 'input' : 'red-input')}/>
                    </div>
                    <p onClick={forgotPassword} className='link f400 normal-font' style={{opacity: 1, fontSize: "14px", cursor: 'pointer'}}>Forgot your password?</p>
                    {state?.loading ? (
                        <button disabled={true} className='form-button normal-font' style={{marginTop: '10px'}}><ThreeDotsWave/></button>
                    ) : (
                        <button disabled={state.disable} className='form-button normal-font' style={{marginTop: '10px'}}>Login</button>
                    )}
                    <p className='normal-font f300' style={{fontSize: "14px"}}><span style={{opacity: 0.3}}>Need an account? </span><Link className='link f400' to='/register'>Register</Link> </p>
                </form>
            </section>
            </Fade>
        </div>
    )
}

export default Login

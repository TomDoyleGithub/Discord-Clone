import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router';
import backdrop from '../images/AuthBackground.svg';
import logo from '../images/Discord-Logo-White.svg';
import reset from '../images/reset-password.svg';
import { CHANGE_PASSWORD } from '../utils/mutations';

function ResetPassword() {
    const history = useHistory();
    const { id, token }:any= useParams();
    const [password, setPassword] = useState('');
    const [formError, setError ] = useState(false);
    const [changePassword] = useMutation(CHANGE_PASSWORD);
    const handleChange = (e:any) => {
        const { value } = e.target;
        setPassword(value);
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            await changePassword({ variables: {id, token, password}});
            history.replace('/login');
        } catch {
            setError(true);
        }
    };

    return (
        <div className='fullscreen'>
            <img className='backdrop-img' src={backdrop} alt='Backdrop'/>
            <section className='reset-container'>
                <img className='auth-logo' alt='Discord Logo' src={logo}/>
                <form onSubmit={handleSubmit} className='form-container'>
                    <img className='reset-img' style={{paddingBottom: '17px'}} src={reset} alt='Reset Icon'/>
                    <p className='header-font f600' style={{fontSize: "25px", margin: '0px auto'}}>Change Your Password</p>
                    <div className='input-container'>
                        {!formError ? (
                            <>
                                <label className='normal-font f500 login-label' style={{fontSize: "12px", opacity: 0.7}}>NEW PASSWORD</label>
                                <input required minLength={5} onChange={handleChange} type='password' name='password' className='normal-font f300 input'/>
                            </>
                        ) : (
                            <>
                                <label className='normal-font f500 login-label red-text' style={{fontSize: "12px", opacity: 0.7}}>NEW PASSWORD - Link expired</label>
                                <input required minLength={5} onChange={handleChange} type='password' name='password' className='normal-font f300 red-input'/>
                            </>
                        )}
                    </div>
                    <button className='form-button normal-font' style={{marginTop: '10px'}}>Change Password</button>
                </form>
            </section>
        </div>
    )
}

export default ResetPassword

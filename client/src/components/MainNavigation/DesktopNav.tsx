import React from 'react';
import './navigation.scss';
import Auth from '../../utils/auth';
import { IoAddSharp, IoCompassSharp } from 'react-icons/io5';
import logo from '../../images/Discord-White.svg';


function DesktopNav() {
    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <div className='border left-side-nav-container'>
            <section className='nav-circle purple-back'>
                <div className='white-strip'></div>
                <div className='nav-speech-bubble normal-font f500'>Home</div>
                <img className='white-logo' alt='Discord Logo' src={logo}/>
            </section>
            <div className='line'>

            </div>
            <section className='nav-circle light-gray-back'>
                <div className='white-strip'></div>
                <div className='nav-speech-bubble normal-font f500'>Add a Server</div>
                <IoAddSharp className='green-icon'/>
            </section>
            <section className='nav-circle light-gray-back'>
                <div className='white-strip'></div>
                <div className='nav-speech-bubble normal-font f500'>Explore Public Servers</div>
                <IoCompassSharp className='green-icon'/>
            </section>
        </div>
    )
}

export default DesktopNav

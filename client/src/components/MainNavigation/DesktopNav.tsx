import React from 'react';
import './navigation.scss';
import Auth from '../../utils/auth';


function DesktopNav() {
    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <div className='border left-side-nav-container'>
            <section className='nav-circle purple-back'>
                <div className='white-strip'></div>
                <div className='nav-speech-bubble'></div>
            </section>
            <div className='line'>

            </div>
            <section className='nav-circle light-gray-back'>
                <div className='white-strip'></div>

            </section>
            <section className='nav-circle light-gray-back'>
                <div className='white-strip'></div>

            </section>
        </div>
    )
}

export default DesktopNav

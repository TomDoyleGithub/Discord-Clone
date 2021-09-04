import React from 'react'
import Auth from '../../utils/auth';
import ProPic from '../StandardProPic/ProPic';
import './userCard.scss';

function UserCard() {
    const handleCopy = () => {
        // This will copy the data when implemented
        navigator.clipboard.writeText('Punkinut');
    };
    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <section className='usercard-container'>
            <ProPic />
            <div className='card-info-container' onClick={handleCopy}>
                <p className='username header-font f700'>Punkinut</p>
                <p className='user-code normal-font'>#4681</p>
            </div>
        </section>
    )
}

export default UserCard

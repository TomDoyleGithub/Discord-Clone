import React from 'react'
import Auth from '../../utils/auth';
import ProPic from '../StandardProPic/ProPic';
import './userCard.scss';

function UserCard() {
    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <section className='usercard-container'>
            <ProPic />
            <div>
                <p className='username'>Punkinut</p>
                <p>#4681</p>
            </div>
        </section>
    )
}

export default UserCard

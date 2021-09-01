import React from 'react'
import Auth from '../../utils/auth';
import './userCard.scss';

function UserCard() {
    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <section className='usercard-container'>

        </section>
    )
}

export default UserCard

import React from 'react'
import './friendsNav.scss'
import friend from '../../images/Friends.svg';

function FriendsNav() {
    return (
        <section className='friend-nav-container'>
            <section className='friend-choice'>
                <img className='friend-icon disc-fr-icon' src={friend} style={{opacity: 0.3}} alt='Friend Icon'/>
                <p className='normal-font f500' style={{fontSize: "17px", paddingLeft: '10px'}}>Friends</p>
                <div className='upper-line'></div>
                <p className='normal-font select-friend-nav'>Online</p>
                <p className='normal-font select-friend-nav'>All</p>
                <p className='normal-font select-friend-nav'>Pending</p>
                <p className='normal-font select-friend-nav'>Blocked</p>
                <p className='normal-font select-friend-nav add-friend'>Add Friend</p>
            </section>
        </section>
    )
}

export default FriendsNav

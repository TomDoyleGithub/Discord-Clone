import React from 'react';
import './navSide.scss';
import friend from '../../images/Friends.svg';
import StartConversation from './StartConversation';
import { NavLink } from 'react-router-dom';

function HomeNavigation() {
    return (
        <section className='home-nav-container'>
            <StartConversation/>
            <NavLink to='/' activeClassName='friends-active' className='friends-tab'>
                <img className='friend-icon' src={friend} alt='Friend Icon'/>
                <p className='normal-font'>Friends</p>
            </NavLink>
        </section>
    )
}

export default HomeNavigation

import React from 'react';
import './navSide.scss';
import friend from '../../images/Friends.svg';
import StartConversation from './StartConversation';
import { NavLink } from 'react-router-dom';
import Auth from '../../utils/auth';

function HomeNavigation() {
    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <section className='home-nav-container'>
            <StartConversation/>
            <NavLink to='/channels/@me' activeClassName='friends-active' className='friends-tab' style={{ marginTop: '8px'}}>
                <img className='friend-icon' src={friend} alt='Friend Icon'/>
                <p className='normal-font'>Friends</p>
            </NavLink>
            <NavLink to='/discovery' activeClassName='friends-active' className='friends-tab' style={{ marginTop: '3px'}}>
                <img className='friend-icon' src={friend} alt='Friend Icon'/>
                <p className='normal-font'>Stage Discovery</p>
            </NavLink>
        </section>
    )
}

export default HomeNavigation

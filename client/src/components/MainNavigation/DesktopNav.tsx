import React from 'react';
import './navigation.scss';
import Auth from '../../utils/auth';
import { IoAddSharp, IoCompassSharp } from 'react-icons/io5';
import { AiOutlineCaretRight } from 'react-icons/ai';
import logo from '../../images/Discord-White.svg';
import { NavLink } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import Notification from '../Notification/Notification';


function DesktopNav() {
    const { homeRoute: route } = useSelector((state: RootStateOrAny) => state);
    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <div className='left-side-nav-container'>
            <NavLink exact activeClassName='active-discord' to={route} className={'nav-circle purple-back'}>
                <section className='white-strip'></section>
                <div className='nav-speech-bubble normal-font f500'>
                    Home
                    <AiOutlineCaretRight className='speech-triangle'/>
                </div>
                <img className='white-logo' alt='Discord Logo' src={logo}/>
                <div className='main-notify'><Notification/></div>
            </NavLink>
            <div className='line'>

            </div>
            <section className='nav-circle plus-server light-gray-back'>
                <div className='white-strip'></div>
                <div className='nav-speech-bubble normal-font f500'>
                    Add a Server
                    <AiOutlineCaretRight className='speech-triangle'/>
                    </div>
                <IoAddSharp className='green-icon'/>
            </section>
            <NavLink exact activeClassName='active-green' to='/guild-discovery' className='nav-circle light-gray-back'>
                <section className='white-strip'></section>
                <div className='nav-speech-bubble normal-font f500'>
                    Explore Public Servers
                    <AiOutlineCaretRight className='speech-triangle'/>
                    </div>
                <IoCompassSharp className='green-icon'/>
            </NavLink>
        </div>
    )
}

export default DesktopNav

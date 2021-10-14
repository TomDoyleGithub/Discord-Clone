import React, { useEffect } from 'react';
import './navSide.scss';
import friend from '../../images/Friends.svg';
import StartConversation from './StartConversation';
import { NavLink, useLocation } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useDispatch } from 'react-redux';
import { CHANGE_HOME_ROUTE } from '../../redux/actions';
import { GoPlus } from 'react-icons/go';
import { AiOutlineCaretRight } from 'react-icons/ai';
import PlaceHolder from './PlaceHolder';
import Notification from '../Notification/Notification';

function HomeNavigation() {
    const location = useLocation();
    const dispatch = useDispatch();

    const route = location?.pathname;
    useEffect(() => {
        dispatch({ type: CHANGE_HOME_ROUTE, route });
    }, [route, dispatch]);

    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <section className='home-nav-container'>
            <StartConversation/>
            <NavLink to='/channels/@me' activeClassName='friends-active' className='friends-tab' style={{ marginTop: '8px'}}>
                <img className='friend-icon' src={friend} alt='Friend Icon'/>
                <p className='normal-font'>Friends</p>
                <div className='friend-notify'><Notification/></div>
            </NavLink>
            <div className='dir-mes-container normal-font f500'>
                <p>Direct Messages</p>
                <GoPlus className='dir-plus-icon'/>
                <div className='dm-bubble'>
                    Create DM
                    <AiOutlineCaretRight className='dm-triangle'/>
                </div>
            </div>
            <PlaceHolder/>
        </section>
    )
}

export default HomeNavigation

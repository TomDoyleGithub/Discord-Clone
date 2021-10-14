import React from 'react'
import './friendsNav.scss'
import friend from '../../images/Friends.svg';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { CHANGE_FRIEND_NAV } from '../../redux/actions';
// import Notification from '../Notification/Notification';

function FriendsNav() {
    const dispatch = useDispatch();
    const { friendsNav } = useSelector((state: RootStateOrAny) => state);
    const handleClick = (e) => {
        const friendsNav = e.currentTarget.getAttribute('data-value');
        dispatch({ type: CHANGE_FRIEND_NAV, friendsNav });
    };
    return (
        <section className='friend-nav-container'>
            <section className='friend-choice'>
                <img className='friend-icon disc-fr-icon' src={friend} style={{opacity: 0.3}} alt='Friend Icon'/>
                <p className='normal-font f500' style={{fontSize: "17px", paddingLeft: '10px'}}>Friends</p>
                <div className='upper-line'></div>
                <p onClick={handleClick} data-value='online' className={'normal-font select-friend-nav ' + (friendsNav === 'online' ? 'friend-nav-active' : '')}>Online</p>
                <p onClick={handleClick} data-value='all'  className={'normal-font select-friend-nav ' + (friendsNav === 'all' ? 'friend-nav-active' : '')}>All</p>
                <section onClick={handleClick} data-value='pending'  className={'normal-font select-friend-nav ' + (friendsNav === 'pending' ? 'friend-nav-active' : '')}>Pending</section>
                <p onClick={handleClick} data-value='blocked'  className={'normal-font select-friend-nav ' + (friendsNav === 'blocked' ? 'friend-nav-active' : '')}>Blocked</p>
                <p onClick={handleClick} data-value='add-friend'  className={'normal-font select-friend-nav add-friend ' + (friendsNav === 'add-friend' ? 'add-friend-active' : 'non-active')}>Add Friend</p>
            </section>
        </section>
    )
}

export default FriendsNav

import React from 'react'
import { useDispatch } from 'react-redux';
import { CHANGE_FRIEND_NAV } from '../../redux/actions';
import playWumpus from '../../images/Play-Wumpus.svg'

function PlayWumpus() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: CHANGE_FRIEND_NAV, friendsNav: 'add-friend' });
    };
    return (
        <article>
        <img src={playWumpus} alt='Play Wumpus'/>
            <p className='wumpus-text normal-font f300'>Wumpus is waiting on friends. You don’t have to though!</p>
            <div onClick={handleClick}><p className='normal-font'>Add Friend</p></div>
        </article>
    )
}

export default PlayWumpus

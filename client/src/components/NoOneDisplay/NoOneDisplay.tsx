import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import sleepWumpus from '../../images/Sleep-Wumpus.svg'
import playWumpus from '../../images/Play-Wumpus.svg'
import leafWumpus from '../../images/Leaf-Wumpus.svg'
import blockWumpus from '../../images/Block-Wumpus.svg'
import { CHANGE_FRIEND_NAV } from '../../redux/actions';
import SearchFriend from '../SearchFriend/SearchFriend';

function NoOneDisplay() {
    const dispatch = useDispatch();
    const { friendsNav } = useSelector((state: RootStateOrAny) => state);
    const handleClick = () => {
        dispatch({ type: CHANGE_FRIEND_NAV, friendsNav: 'add-friend' });
    };
    if (friendsNav === 'online') {
        return (
            <article>
                <img src={sleepWumpus} alt='Asleep Wumpus'/>
                <p className='wumpus-text normal-font f300'>No one's around to play with Wumpus.</p>
            </article>
        )
    } else if (friendsNav === 'all') {
        return (
            <article>
                <img src={playWumpus} alt='Play Wumpus'/>
                <p className='wumpus-text normal-font f300'>Wumpus is waiting on friends. You don’t have to though!</p>
                <div onClick={handleClick}><p className='normal-font'>Add Friend</p></div>
            </article>
        )
    } else if (friendsNav === 'pending') {
        return (
            <article>
                <img src={leafWumpus} alt='Leaf Wumpus'/>
                <p className='wumpus-text normal-font f300'>There are no pending friend requests. Here's Wumpus for now.</p>
            </article>
        )
    } else if (friendsNav === 'blocked') {
        return (
            <article>
                <img src={blockWumpus} alt='Block Wumpus'/>
                <p className='wumpus-text normal-font f300'>You can't unblock the Wumpus.</p>
            </article>
        )
    } else if (friendsNav === 'add-friend') {
        return (
            <article>
                <SearchFriend/>
                <img style={{marginTop: '150px'}} src={playWumpus} alt='Play Wumpus'/>
                <p className='wumpus-text normal-font f300'>Wumpus is waiting on friends. You don’t have to though!</p>
            </article>
        )
    }
    return <></>
}

export default NoOneDisplay

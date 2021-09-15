import React from 'react'
import SearchFriend from '../SearchFriend/SearchFriend';
import playWumpus from '../../images/Play-Wumpus.svg'

function FriendWumpus() {
    return (
        <article>
                <SearchFriend/>
                <img style={{marginTop: '150px'}} src={playWumpus} alt='Play Wumpus'/>
                <p className='wumpus-text normal-font f300'>Wumpus is waiting on friends. You don’t have to though!</p>
            </article>
    )
}

export default FriendWumpus

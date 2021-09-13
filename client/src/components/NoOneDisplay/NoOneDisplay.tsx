import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import sleepWumpus from '../../images/Sleep-Wumpus.svg'
import playWumpus from '../../images/Play-Wumpus.svg'
import leafWumpus from '../../images/Leaf-Wumpus.svg'
import blockWumpus from '../../images/Block-Wumpus.svg'

function NoOneDisplay() {
    const { friendsNav } = useSelector((state: RootStateOrAny) => state);
    if (friendsNav === 'online') {
        return (
            <article>
                <img src={sleepWumpus} alt='Asleep Wumpus'/>
            </article>
        )
    } else if (friendsNav === 'all') {
        return (
            <article>
                <img src={playWumpus} alt='Play Wumpus'/>
            </article>
        )
    } else if (friendsNav === 'pending') {
        return (
            <article>
                <img src={leafWumpus} alt='Leaf Wumpus'/>
            </article>
        )
    } else if (friendsNav === 'blocked') {
        return (
            <article>
                <img src={blockWumpus} alt='Block Wumpus'/>
            </article>
        )
    }
    return <></>
}

export default NoOneDisplay

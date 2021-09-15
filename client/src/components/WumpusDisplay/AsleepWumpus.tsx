import React from 'react'
import sleepWumpus from '../../images/Sleep-Wumpus.svg'

function AsleepWumpus() {
    return (
        <article>
            <img src={sleepWumpus} alt='Asleep Wumpus'/>
            <p className='wumpus-text normal-font f300'>No one's around to play with Wumpus.</p>
        </article>
    )
}

export default AsleepWumpus

import React from 'react'
import blockWumpus from '../../images/Block-Wumpus.svg'

function BlockWumpus() {
    return (
        <article>
            <img className='wumpo' src={blockWumpus} alt='Block Wumpus'/>
            <p className='wumpus-text normal-font f300'>You can't unblock the Wumpus.</p>
        </article>
    )
}

export default BlockWumpus

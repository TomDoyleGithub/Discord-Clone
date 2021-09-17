import React from 'react'
import leafWumpus from '../../images/Leaf-Wumpus.svg'

function LeafWumpus() {
    return (
        <article>
            <img className='wumpo' src={leafWumpus} alt='Leaf Wumpus'/>
            <p className='wumpus-text normal-font f300'>There are no pending friend requests. Here's Wumpus for now.</p>
        </article>
    )
}

export default LeafWumpus

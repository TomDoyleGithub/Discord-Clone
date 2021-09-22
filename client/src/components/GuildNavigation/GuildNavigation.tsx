import React from 'react'
import './guildNav.scss'
import { IoCompassSharp } from 'react-icons/io5';

function GuildNavigation() {
    return (
        <section className='guild-nav-container'>
            <p className='discover-header header-font f700'>Discover</p>
            {/* Turn this card into a seperate component and pass the values in a props */}
           <section className='friends-tab'>
                <IoCompassSharp className='compass-icon'/>
                <p className='normal-font'>Home</p>
           </section>
        </section>
    )
}

export default GuildNavigation

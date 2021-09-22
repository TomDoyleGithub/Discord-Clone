import React from 'react'
import './guildNav.scss'
import GuildCard from './GuildCard'
import { IoCompassSharp } from 'react-icons/io5';

function GuildNavigation() {
    return (
        <section className='guild-nav-container'>
            <p className='discover-header header-font f700'>Discover</p>
            <GuildCard Icon={IoCompassSharp} iconClass={'compass-icon'} text={'Home'}/>
        </section>
    )
}

export default GuildNavigation

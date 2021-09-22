import React from 'react'
import './guildNav.scss'
import GuildCard from './GuildCard'
import { IoCompassSharp, IoGameControllerSharp } from 'react-icons/io5';
import { RootStateOrAny, useSelector } from 'react-redux';

function GuildNavigation() {
    const { guildNav } = useSelector((state: RootStateOrAny) => state);
    return (
        <section className='guild-nav-container'>
            <p className='discover-header header-font f700'>Discover</p>
            <GuildCard Icon={IoCompassSharp} iconClass={'compass-icon'} text={'Home'} guildNav={guildNav}/>
            <GuildCard Icon={IoGameControllerSharp} iconClass={'compass-icon'} text={'Gaming'} guildNav={guildNav}/>
        </section>
    )
}

export default GuildNavigation

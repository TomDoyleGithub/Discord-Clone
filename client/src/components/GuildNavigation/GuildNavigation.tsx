import React from 'react'
import './guildNav.scss'
import GuildCard from './GuildCard'
import { RootStateOrAny, useSelector } from 'react-redux';
import Compass from '../../images/Compass.svg';
import Controller from '../../images/Controller.svg';
import Music from '../../images/Music.svg';
import Grad from '../../images/Grad.svg';
import Atom from '../../images/Atom.svg';
import Tv from '../../images/Tv.svg';

function GuildNavigation() {
    const { guildNav } = useSelector((state: RootStateOrAny) => state);
    return (
        <section className='guild-nav-container'>
            <p className='discover-header header-font f700'>Discover</p>
            <GuildCard Icon={Compass} text={'Home'} guildNav={guildNav}/>
            <GuildCard Icon={Controller} text={'Gaming'} guildNav={guildNav}/>
            <GuildCard Icon={Music} text={'Music'} guildNav={guildNav}/>
            <GuildCard Icon={Grad} text={'Education'} guildNav={guildNav}/>
            <GuildCard Icon={Atom} text={'Science & Tech'} guildNav={guildNav}/>
            <GuildCard Icon={Tv} text={'Entertainment'} guildNav={guildNav}/>
        </section>
    )
}

export default GuildNavigation

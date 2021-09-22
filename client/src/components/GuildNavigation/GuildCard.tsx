import React from 'react'
import { useDispatch } from 'react-redux';
import { CHANGE_GUILD_NAV } from '../../redux/actions';

function GuildCard({Icon, text, guildNav}) {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        const guildNav = e.currentTarget.getAttribute('data-value');
        dispatch({ type: CHANGE_GUILD_NAV, guildNav });
    };
    return (
        <section onClick={handleClick} className={'friends-tab guild-tab ' + (guildNav === text ? 'discover-nav-active' : '')} data-value={text}>
            <img src={Icon} className='guild-icon' alt='Icon'/>
             <p className='normal-font'>{text}</p>
        </section>
    )
}

export default GuildCard

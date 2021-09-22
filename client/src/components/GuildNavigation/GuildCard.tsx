import React from 'react'

function GuildCard({Icon, iconClass, text}) {
    return (
        <section className='friends-tab' data-value={text}>
             <Icon className={iconClass}/>
             <p className='normal-font'>{text}</p>
        </section>
    )
}

export default GuildCard

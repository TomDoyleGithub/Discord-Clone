import React from 'react'

function StatusIcon({status}) {
    if (status === 'online') {
        return (
            <section className= 'online real-status minor-adjustment'></section>
        )
    } else if (status === 'idle') {
        return (
            <section className='idle real-status minor-adjustment'>
                <section className='idle-section'></section>
            </section>
        )
    } else if (status === 'do-not-disturb') {
        return (
            <section className='do-not-disturb real-status minor-adjustment'>
                <section></section>
            </section>
        )
    } else {
        return (
            <section className='invisible real-status request-status'>
                <section className='hole-dot'></section>
            </section>
        )
    }
}

export default StatusIcon

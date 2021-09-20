import React from 'react'

function StatusIcon({id, status}) {
    // This console logs the id's of the user on the page
    // console.log(id) HERE HERE HERE
    // Other console log in NoOneDisplay line 69
    // Find the members userId against this ID in the socket online user
    // If it exists set the status as the socket status
    // Else do the code below
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

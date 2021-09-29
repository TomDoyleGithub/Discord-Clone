import React from 'react'

function OfficialEmojiSelect({ type }) {
    // Depending on the type, you will return a different series of emoji
    // These emoji lists may also need to be in a seperate component
    return (
        <section className='offical-emoji-selection'>
            <div className='single-emoji-container'><div className='single-emoji'></div></div>
        </section> 
    )
}

export default OfficialEmojiSelect

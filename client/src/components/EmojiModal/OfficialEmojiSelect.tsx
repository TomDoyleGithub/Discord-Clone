import React from 'react'
import PeopleEmojis from './PeopleEmojis'

function OfficialEmojiSelect({ type }) {
    // Depending on the type, you will return a different series of emoji
    // These emoji lists may also need to be in a seperate component
    if (type === 'people') {
        return (
            <section className='offical-emoji-selection'>
                <PeopleEmojis/>
            </section> 
        )
    } else {
        return <></>
    }
}

export default OfficialEmojiSelect

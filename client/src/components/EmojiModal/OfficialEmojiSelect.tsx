import React from 'react'
import PeopleEmojis from './PeopleEmojis'

function OfficialEmojiSelect({ type }) {
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

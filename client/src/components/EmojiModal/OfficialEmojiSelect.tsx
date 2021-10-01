import React from 'react'
import PeopleEmojis from './PeopleEmojis'
import NatureEmojis from './NatureEmojis'

function OfficialEmojiSelect({ type }) {
    if (type === 'people') {
        return (
            <section className='offical-emoji-selection'>
                <PeopleEmojis/>
            </section> 
        )
    } else if (type === 'nature') {
        return (
            <section className='offical-emoji-selection'>
                <NatureEmojis/>
            </section> 
        )
    } else {
        return <></>
    }
}

export default OfficialEmojiSelect

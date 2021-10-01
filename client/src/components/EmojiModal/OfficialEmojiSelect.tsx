import React from 'react'
import PeopleEmojis from './PeopleEmojis'
import NatureEmojis from './NatureEmojis'
import FoodEmojis from './FoodEmojis'

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
    }  else if (type === 'food') {
        return (
            <section className='offical-emoji-selection'>
                <FoodEmojis/>
            </section> 
        )
    } else {
        return <></>
    }
}

export default OfficialEmojiSelect

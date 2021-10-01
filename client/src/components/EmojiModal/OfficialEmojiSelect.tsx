import React from 'react'
import ListEmojis from './ListEmojis'

function OfficialEmojiSelect({ type }) {
        return (
            <section className='offical-emoji-selection'>
                <ListEmojis type={type}/>
            </section> 
        )
}

export default OfficialEmojiSelect

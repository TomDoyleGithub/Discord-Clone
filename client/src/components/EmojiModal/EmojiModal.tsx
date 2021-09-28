import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import './emojiModal.scss'

function EmojiModal() {
    const { emojiModal} = useSelector((state: RootStateOrAny) => state);
    if (emojiModal === true) {
        return (
            <section className='general-emoji-container'>
                
            </section>
        )
    } else {
        return <></>
    }
}

export default EmojiModal

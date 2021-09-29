import React, { useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import './emojiModal.scss';
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import EmojiCategory from './EmojiCategory'


function EmojiModal() {
    const [searchEmoji, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value)
    };

    const clearInput = () => {
        setSearch('')
    };

    const { emojiModal} = useSelector((state: RootStateOrAny) => state);
    if (emojiModal === true) {
        return (
            <section className='general-emoji-container'>
                <section className='emoji-search'>
                    <section className='emoji-search-fake-input'>
                        <input onChange={handleChange} value={searchEmoji} className='emoji-search-input normal-font f300' placeholder='Find the perfect emoji' autoFocus></input>
                        {searchEmoji === '' ? <IoSearch className='emoji-search-icon'/> : <IoCloseSharp onClick={clearInput} className='emoji-close-icon'/>}
                    </section>
                </section>
                <EmojiCategory/>
            </section>
        )
    } else {
        return <></>
    }
}

export default EmojiModal

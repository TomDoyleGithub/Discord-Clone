import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import './emojiModal.scss';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'


function EmojiModal() {
    const handleClick = (emoji, event) => {
        const nativeEmoji = emoji.native;
        console.log(nativeEmoji);
    };

    const { emojiModal} = useSelector((state: RootStateOrAny) => state);
    if (emojiModal === true) {
        return (
            <>
            <Picker
            onClick={handleClick} 
            set='twitter'
            emojiSize={33}
            title={''} 
            theme='dark'
            style={{ 
                position: 'absolute', 
                top: '20px', 
                right: '20px',
                zIndex: '9999999999999'
            }} 
            />
            </>
        )
    } else {
        return <></>
    }
}

export default EmojiModal

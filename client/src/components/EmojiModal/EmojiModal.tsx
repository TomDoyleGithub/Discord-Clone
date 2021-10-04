import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import './emojiModal.scss';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { CUSTOM_EMOJI_CHOICE, SET_EMOJI_MODAL } from '../../redux/actions';


function EmojiModal() {
    const dispatch = useDispatch();
    const handleClick = (emoji, event) => {
        const nativeEmoji = emoji.native;
        dispatch({ type: SET_EMOJI_MODAL, emojiModal: false});
        dispatch({ type: CUSTOM_EMOJI_CHOICE, emoji: nativeEmoji});
    };

    const { emojiModal, emojiLeft, emojiTop } = useSelector((state: RootStateOrAny) => state);
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
                left: emojiLeft + 20,
                top: emojiTop - 200, 
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

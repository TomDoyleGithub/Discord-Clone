import React from 'react'
import { useDispatch } from 'react-redux';
import { SET_EMOJI_PLACEHOLDER } from '../../redux/actions';
import { activityArr } from '../../utils/emojiArrays/activityArr'

function ActivityEmojis() {
    const dispatch = useDispatch();

    const handleHover = (e) => {
        const name = e.currentTarget.getAttribute('data-value');
        dispatch({ type: SET_EMOJI_PLACEHOLDER, emojiPlaceholder: name });
    };

    return (
        <>
            {activityArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}
        </>
    )
}

export default ActivityEmojis

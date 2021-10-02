import React from 'react'
import { useDispatch } from 'react-redux';
import { SET_EMOJI_PLACEHOLDER } from '../../redux/actions';
import { peopleArr } from '../../utils/emojiArrays/peopleArr';
import { natureArr } from '../../utils/emojiArrays/natureArr';
import { foodArr } from '../../utils/emojiArrays/foodArr';
import { activityArr } from '../../utils/emojiArrays/activityArr';
import { travelArr } from '../../utils/emojiArrays/travelArr';
import { objectsArr } from '../../utils/emojiArrays/objectsArr';
import { symbolsArr } from '../../utils/emojiArrays/symbolsArr';
import { flagsArr } from '../../utils/emojiArrays/flagsArr';

function ListEmojis({ type }) {
    const dispatch = useDispatch();

    const handleHover = (e) => {
        const name = e.currentTarget.getAttribute('data-value');
        dispatch({ type: SET_EMOJI_PLACEHOLDER, emojiPlaceholder: name });
    };
    if (type === 'people') {
        return <>{peopleArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}</>
    } else if (type === 'nature') {
        return <>{natureArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}</>
    } else if (type === 'food') {
        return <>{foodArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}</>
    } else if (type === 'activities') {
        return <>{activityArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}</>
    } else if (type === 'travel') {
        return <>{travelArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}</>
    } else if (type === 'objects') {
        return  <>{objectsArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}</>
    } else if (type === 'symbols') {
        return <>{symbolsArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}</>
    } else if (type === 'flags') {
        return <>{flagsArr.map((emoji) => (<div key={emoji.dim} onMouseEnter={handleHover} data-value={emoji.name} className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji.dim}}></div></div>))}</>
    } else {
        return <></>
    }
}

export default ListEmojis
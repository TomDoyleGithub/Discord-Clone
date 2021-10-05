import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';

function ExpireDropdown() {
    const { emojiLeft, emojiTop } = useSelector((state: RootStateOrAny) => state);
    const handleClick = (e) => {
        const expire = e.currentTarget.getAttribute('data-value');
        console.log(expire);
    };

    return (
        <div style={{left: emojiLeft, top: emojiTop}} className='status-dropdown-container expire-distance normal-font'>
            <p onClick={handleClick} data-value='Today' className='status-dropdown-choice'>Today</p>
            <p onClick={handleClick} data-value='4 hours' className='status-dropdown-choice'>4 hours</p>
            <p onClick={handleClick} data-value='1 hour' className='status-dropdown-choice'>1 hour</p>
            <p onClick={handleClick} data-value='30 minutes' className='status-dropdown-choice'>30 minutes</p>
            <p onClick={handleClick} data-value="Don't clear" className='status-dropdown-choice'>Don't clear</p>
        </div>
    )
}

export default ExpireDropdown

import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';

function ExpireDropdown() {
    const { emojiLeft, emojiTop } = useSelector((state: RootStateOrAny) => state);
    return (
        <div style={{left: emojiLeft, top: emojiTop}} className='status-dropdown-container expire-distance normal-font'>
            <p className='status-dropdown-choice'>Today</p>
            <p className='status-dropdown-choice'>4 hours</p>
            <p className='status-dropdown-choice'>1 hour</p>
            <p className='status-dropdown-choice'>30 minutes</p>
            <p className='status-dropdown-choice'>Don't clear</p>
        </div>
    )
}

export default ExpireDropdown

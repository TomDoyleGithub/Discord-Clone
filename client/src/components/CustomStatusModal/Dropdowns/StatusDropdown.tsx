import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';

function StatusDropdown() {
    const { emojiLeft, emojiTop } = useSelector((state: RootStateOrAny) => state);
    return (
        <div style={{left: emojiLeft, top: emojiTop}} className='status-dropdown-container expire-distance normal-font'>
            <p className='status-dropdown-choice'>Online</p>
            <p className='status-dropdown-choice'>Idle</p>
            <p className='status-dropdown-choice'>Do Not Disturb</p>
            <p className='status-dropdown-choice'>Invisible</p>
        </div>
    )
}

export default StatusDropdown

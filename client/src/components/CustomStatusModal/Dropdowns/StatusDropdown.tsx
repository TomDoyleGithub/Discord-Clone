import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import {online, idle, doNotDisturb, invisible} from '../../../images/images'

function StatusDropdown() {
    const { emojiLeft, emojiTop } = useSelector((state: RootStateOrAny) => state);
    return (
        <div style={{left: emojiLeft, top: emojiTop}} className='status-dropdown-container expire-distance normal-font'>
            <p className='status-dropdown-choice'><img src={online} alt='Online Icon'/>Online</p>
            <p className='status-dropdown-choice'><img src={idle} alt='Idle Icon'/>Idle</p>
            <p className='status-dropdown-choice'><img src={doNotDisturb} alt='Do Not Disturb Icon'/>Do Not Disturb</p>
            <p className='status-dropdown-choice'><img src={invisible} alt='Invisible Icon'/>Invisible</p>
        </div>
    )
}

export default StatusDropdown

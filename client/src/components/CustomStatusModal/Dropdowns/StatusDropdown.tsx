import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {online, idle, doNotDisturb, invisible} from '../../../images/images'
import { SET_STATUS_DROOPDOWN } from '../../../redux/actions';
import check from '../../../images/Dropdown-Check.svg';

function StatusDropdown({ status }) {
    const dispatch = useDispatch();
    const { emojiLeft, emojiTop } = useSelector((state: RootStateOrAny) => state);

    const handleClick = (e) => {
        const status = e.currentTarget.getAttribute('data-value');
        dispatch({ type: SET_STATUS_DROOPDOWN, status });
    };

    return (
        <div style={{left: emojiLeft, top: emojiTop}} className='status-dropdown-container expire-distance normal-font'>
            <p onClick={handleClick} data-value='online' className={'status-dropdown-choice ' + (status === 'online' ? 'dropdown-active' : '')}><img src={online} alt='Online Icon'/>Online <img src={check} alt='Dropdown Check' className='dropdown-check'/></p>
            <p onClick={handleClick} data-value='idle' className={'status-dropdown-choice ' + (status === 'idle' ? 'dropdown-active' : '')}><img src={idle} alt='Idle Icon'/>Idle <img src={check} alt='Dropdown Check' className='dropdown-check'/></p>
            <p onClick={handleClick} data-value='do-not-disturb' className={'status-dropdown-choice ' + (status === 'do-not-disturb' ? 'dropdown-active' : '')}><img src={doNotDisturb} alt='Do Not Disturb Icon'/>Do Not Disturb <img src={check} alt='Dropdown Check' className='dropdown-check'/></p>
            <p onClick={handleClick} data-value='invisible' className={'status-dropdown-choice ' + (status === 'invisible' ? 'dropdown-active' : '')}><img src={invisible} alt='Invisible Icon'/>Invisible <img src={check} alt='Dropdown Check' className='dropdown-check'/></p>
        </div>
    )
}

export default StatusDropdown

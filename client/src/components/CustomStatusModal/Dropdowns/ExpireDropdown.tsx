import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { SET_EXPIRE_DROPDOWN } from '../../../redux/actions';
import check from '../../../images/Dropdown-Check.svg';

function ExpireDropdown() {
    const dispatch = useDispatch();
    const { emojiLeft, emojiTop, dropdownExpire } = useSelector((state: RootStateOrAny) => state);
    const handleClick = (e) => {
        const expire = e.currentTarget.getAttribute('data-value');
        dispatch({ type: SET_EXPIRE_DROPDOWN, expire });
    };

    return (
        <div style={{left: emojiLeft, top: emojiTop}} className='status-dropdown-container expire-distance normal-font'>
            <p onClick={handleClick} data-value='Today' className={'status-dropdown-choice ' + (dropdownExpire === 'Today' ? 'dropdown-active' : '')}>Today <img src={check} alt='Dropdown Check' className='dropdown-check'/></p>
            <p onClick={handleClick} data-value='4 hours' className={'status-dropdown-choice ' + (dropdownExpire === '4 hours' ? 'dropdown-active' : '')}>4 hours <img src={check} alt='Dropdown Check' className='dropdown-check'/></p>
            <p onClick={handleClick} data-value='1 hour' className={'status-dropdown-choice ' + (dropdownExpire === '1 hour' ? 'dropdown-active' : '')}>1 hour <img src={check} alt='Dropdown Check' className='dropdown-check'/></p>
            <p onClick={handleClick} data-value='30 minutes' className={'status-dropdown-choice ' + (dropdownExpire === '30 minutes' ? 'dropdown-active' : '')}>30 minutes <img src={check} alt='Dropdown Check' className='dropdown-check'/></p>
            <p onClick={handleClick} data-value="Don't clear" className={'status-dropdown-choice ' + (dropdownExpire === "Don't clear" ? 'dropdown-active' : '')}>Don't clear <img src={check} alt='Dropdown Check' className='dropdown-check'/></p>
        </div>
    )
}

export default ExpireDropdown

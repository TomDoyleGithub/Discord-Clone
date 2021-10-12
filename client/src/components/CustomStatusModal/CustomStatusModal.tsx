import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { CHANGE_STATUS, CUSTOM_EMOJI_CHOICE, SET_EMOJI_MODAL, SET_EXPIRE_DROPDOWN, SET_STATUS_DROOPDOWN, TOGGLE_CUSTOM_STATUS, UPDATE_EMOJI_POSITION } from '../../redux/actions';
import Wumpus from '../../images/Status-Wumpus.svg'
import './statusModal.scss'
import { IoCloseOutline } from "react-icons/io5";
import { emojiArr } from '../../utils/emojiArr';
import { IoCloseCircle, IoChevronDownSharp } from "react-icons/io5";
import emoji from 'react-easy-emoji';
import { useMutation } from '@apollo/client';
import { STATUS_UPDATE } from '../../utils/mutations';
import { expireFunction } from '../../utils/ExpireFunctions';
import { handleDrop } from './EventFunctions/handleDrop';
import { hideModal } from './EventFunctions/hideModal';
import { changeEmoji } from './EventFunctions/changeEmoji';
import { openEmoji } from './EventFunctions/openEmoji';
import { handleChange } from './EventFunctions/handleChange';
import { clearInput } from './EventFunctions/clearInput';
import { submitModal } from './EventFunctions/submitModal';
import DropSelection from './Components/DropSelection';
import CustomHeader  from './Components/CustomHeader';

function CustomStatusModal() {
    const dispatch = useDispatch();
    const { customStatusModal, emojiModal, emojiChoice, status, dropdownStatus, dropdownExpire, userData: data, customStatusMut } = useSelector((state: RootStateOrAny) => state);
    // CONVERT BELOW TO REDUX
    const [updateStatus] = useMutation(STATUS_UPDATE);

    let realStatus;
    if (dropdownStatus !== '') {
        realStatus = dropdownStatus
    } else if (status === '') {
        realStatus = data?.me?.status
    } else {
        realStatus = status
    }

    const [realChoice, setEmoji] = useState('0px 0px');
    const [input, setInput] = useState('');
    const [expireDropdown, setExpireDrop] = useState(false);
    const [statusDropdown, setStatusDrop] = useState(false);

    return (
        <div onClick={(e) => hideModal(e, dispatch, setExpireDrop, setStatusDrop, setInput, TOGGLE_CUSTOM_STATUS, SET_EMOJI_MODAL, CUSTOM_EMOJI_CHOICE, SET_STATUS_DROOPDOWN, SET_EXPIRE_DROPDOWN)} className={'modal-container ' + (customStatusModal ? 'show' : 'hide')}>
            <DropSelection setStatusDrop={setStatusDrop} setExpireDrop={setExpireDrop} expireDropdown={expireDropdown} statusDropdown={statusDropdown} realStatus={realStatus}/>

            <section className='password-send custom-send'>
                <CustomHeader Wumpus={Wumpus} />
                <IoCloseOutline onClick={(e) => hideModal(e, dispatch, setExpireDrop, setStatusDrop, setInput, TOGGLE_CUSTOM_STATUS, SET_EMOJI_MODAL, CUSTOM_EMOJI_CHOICE, SET_STATUS_DROOPDOWN, SET_EXPIRE_DROPDOWN)}  className='custom-status-cross'/>
                
                <section className='cus-status-for'>
                    <section className='input-container'>
                            <label className='normal-font f500 status-label'>What's cookin', woolywowo?</label>
                            <div className='fake-input-status'>
                                {!emojiChoice ? (
                                    <div onMouseEnter={() => changeEmoji(emojiModal, emojiArr, setEmoji)} onClick={(e) => openEmoji(e, setStatusDrop, setExpireDrop, dispatch, emojiModal, SET_EMOJI_MODAL, UPDATE_EMOJI_POSITION)} className={'emoji-sprite ' + (emojiModal ? 'emoji-active' : '')} style={{backgroundPosition: realChoice}}></div>
                                ) : (
                                    <p onClick={(e) => openEmoji(e, setStatusDrop, setExpireDrop, dispatch, emojiModal, SET_EMOJI_MODAL, UPDATE_EMOJI_POSITION)} className='chosen-custom-emoji'>{emoji(emojiChoice)}</p>
                                )}
                                {input !== ''  || emojiChoice !== '' ? <IoCloseCircle className='clear-input' onClick={() => clearInput(setInput, dispatch, CUSTOM_EMOJI_CHOICE)}/> : <></>}
                                <input autoComplete="off" value={input} onChange={(e) => handleChange(e, setInput)} name='CustomStatus' maxLength={30} placeholder='Support has arrived'  className='normal-font f300 real-input-status' autoFocus/>
                            </div>

                            <label className='normal-font f500 status-label'>Clear After</label>
                            <div data-value='date' onClick={(e) => handleDrop(e, dispatch, UPDATE_EMOJI_POSITION, setStatusDrop, setExpireDrop, expireDropdown, statusDropdown)} className='fake-input-status' style={{cursor: 'pointer'}}>
                                <p className='expire-choice normal-font'>{dropdownExpire}</p>
                                <IoChevronDownSharp className={'custon-dropdown-arrow ' + (expireDropdown ? 'flip-chevron' : '')} />
                            </div>

                            <div style={{borderBottom: '1px solid #424549', marginBottom: '10px'}}></div>

                            <label className='normal-font f500 status-label'>Status</label>
                            <div data-value='status' onClick={(e) => handleDrop(e, dispatch, UPDATE_EMOJI_POSITION, setStatusDrop, setExpireDrop, expireDropdown, statusDropdown)} className='fake-input-status' style={{cursor: 'pointer'}}>
                                <p className='expire-choice normal-font'>{realStatus?.replace(/-/g, ' ')}</p>
                                <IoChevronDownSharp className={'custon-dropdown-arrow ' + (statusDropdown ? 'flip-chevron' : '')} />
                            </div>
                    </section>
                </section>
                <section className='custom-status-form-container'>
                    <p onClick={(e) => hideModal(e, dispatch, setExpireDrop, setStatusDrop, setInput, TOGGLE_CUSTOM_STATUS, SET_EMOJI_MODAL, CUSTOM_EMOJI_CHOICE, SET_STATUS_DROOPDOWN, SET_EXPIRE_DROPDOWN)}  className='status-form-button-container normal-font'>Cancel</p>
                    <p onClick={(e) => submitModal(e, hideModal, dispatch, setExpireDrop, setStatusDrop, setInput, TOGGLE_CUSTOM_STATUS, SET_EMOJI_MODAL, CUSTOM_EMOJI_CHOICE, SET_STATUS_DROOPDOWN, SET_EXPIRE_DROPDOWN, emojiChoice, input, expireFunction, dropdownExpire, customStatusMut, realStatus, data, CHANGE_STATUS, updateStatus)} className='status-form-button-container normal-font purple-status-button-custom'>Save</p>
                </section>
            </section>
        </div>
    )
}

export default CustomStatusModal

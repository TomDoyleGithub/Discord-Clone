import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { CHANGE_STATUS, CUSTOM_EMOJI_CHOICE, SET_EMOJI_MODAL, SET_EXPIRE_DROPDOWN, SET_STATUS_DROOPDOWN, TOGGLE_CUSTOM_STATUS, UPDATE_EMOJI_POSITION } from '../../redux/actions';
import Wumpus from '../../images/Status-Wumpus.svg'
import './statusModal.scss'
import { IoCloseOutline } from "react-icons/io5";
import { emojiArr } from '../../utils/emojiArr';
import { IoCloseCircle, IoChevronDownSharp } from "react-icons/io5";
import emoji from 'react-easy-emoji';
import ExpireDropdown from './Dropdowns/ExpireDropdown';
import StatusDropdown from './Dropdowns/StatusDropdown';
import { useMutation } from '@apollo/client';
import { STATUS_UPDATE } from '../../utils/mutations';
import { expireFunction } from '../../utils/ExpireFunctions';
import { handleDrop } from './EventFunctions/handleDrop';

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

    const hideModal = (e) => {
        if(e.target === e.currentTarget) {
            dispatch({ type: TOGGLE_CUSTOM_STATUS, showModal: false});
            dispatch({ type: SET_EMOJI_MODAL, emojiModal: false});
            dispatch({ type: CUSTOM_EMOJI_CHOICE, emoji: ''});
            setTimeout(function () {
                dispatch({ type: SET_STATUS_DROOPDOWN, status: '' });
                dispatch({ type: SET_EXPIRE_DROPDOWN, expire: 'Today' });
            }, 1000); 
            setExpireDrop(false);
            setStatusDrop(false);
            setInput('');
         }
    };

    const submitModal = async (e) => {
        hideModal(e);
        const customStatus = `${emojiChoice}~${input}`;
        if (customStatus !== ' ') {
            const expireDate = expireFunction(dropdownExpire).toString();
            customStatusMut({ variables: {customStatus, expireDate}});
        }

        if (realStatus !== data?.me?.status) {
            dispatch({ type: CHANGE_STATUS, status: realStatus });
            updateStatus({ variables: {status: realStatus}});
        }
    };

    const changeEmoji = () => {
        if (emojiModal === false) {
            const random = Math.floor(Math.random() * emojiArr.length);
            setEmoji(emojiArr[random])
        }
    };

    const handleChange = (event: any) => {
        const val = event.target.value
        setInput(val)
    };

    const clearInput = () => {
        setInput('');
        dispatch({ type: CUSTOM_EMOJI_CHOICE, emoji: ''});
    };

    const openEmoji = (e) => {
        setStatusDrop(false);
        setExpireDrop(false);
        if (emojiModal === true) {
            dispatch({ type: SET_EMOJI_MODAL, emojiModal: false});
        } else {
            dispatch({ type: SET_EMOJI_MODAL, emojiModal: true});
            dispatch({ type: UPDATE_EMOJI_POSITION, left: e.pageX, top: e.pageY});
        }
        
    };

    return (
        <div onClick={hideModal} className={'modal-container ' + (customStatusModal ? 'show' : 'hide')}>
            <div data-value='date' onClick={(e) => handleDrop(e, dispatch, UPDATE_EMOJI_POSITION, setStatusDrop, setExpireDrop, expireDropdown, statusDropdown)} >{expireDropdown ? <ExpireDropdown/> : <></>}</div>
            <div data-value='status' onClick={(e) => handleDrop(e, dispatch, UPDATE_EMOJI_POSITION, setStatusDrop, setExpireDrop, expireDropdown, statusDropdown)}>{statusDropdown ? <StatusDropdown status={realStatus}/> : <></>}</div>
            <section className='password-send custom-send'>
                <section className='head-wumpus-container'>
                    <img className='staty-wumpus' src={Wumpus} alt='Happy Wumpus'/>
                    <p className='set-status-title normal-font f500'>Set a custom a status</p>
                </section>
                <IoCloseOutline onClick={hideModal} className='custom-status-cross'/>
                <section className='cus-status-for'>
                    <section className='input-container'>
                            <label className='normal-font f500 status-label'>What's cookin', woolywowo?</label>
                            <div className='fake-input-status'>
                                {!emojiChoice ? (
                                    <div onMouseEnter={changeEmoji} onClick={openEmoji} className={'emoji-sprite ' + (emojiModal ? 'emoji-active' : '')} style={{backgroundPosition: realChoice}}></div>
                                ) : (
                                    <p onClick={openEmoji} className='chosen-custom-emoji'>{emoji(emojiChoice)}</p>
                                )}
                                {input !== ''  || emojiChoice !== '' ? <IoCloseCircle className='clear-input' onClick={clearInput}/> : <></>}
                                <input autoComplete="off" value={input} onChange={handleChange} name='CustomStatus' maxLength={30} placeholder='Support has arrived'  className='normal-font f300 real-input-status' autoFocus/>
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
                    <p onClick={hideModal} className='status-form-button-container normal-font'>Cancel</p>
                    <p onClick={submitModal} className='status-form-button-container normal-font purple-status-button-custom'>Save</p>
                </section>
            </section>
        </div>
    )
}

export default CustomStatusModal

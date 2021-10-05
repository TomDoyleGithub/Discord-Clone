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
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import { STATUS_UPDATE } from '../../utils/mutations';
import { expireFunction } from '../../utils/ExpireFunctions';

function CustomStatusModal() {
    const dispatch = useDispatch();
    const { customStatusModal, emojiModal, emojiChoice, status, dropdownStatus, dropdownExpire } = useSelector((state: RootStateOrAny) => state);
    const { data } = useQuery(GET_ME);
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

    const handleDropdown = (e) => {
        const type = e.currentTarget.getAttribute('data-value');
        const leftPosition = e.currentTarget.getBoundingClientRect().left;
        const topPosition = e.currentTarget.getBoundingClientRect().bottom;
        dispatch({ type: UPDATE_EMOJI_POSITION, left: leftPosition, top: topPosition});
        if (type === 'date') {
            setStatusDrop(false);
            setExpireDrop(!expireDropdown)
        } else {
            setExpireDrop(false);
            setStatusDrop(!statusDropdown)
        }
    };

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

    const submitModal = (e) => {
        hideModal(e);
        const customStatus = `${emojiChoice} ${input}`;
        if (customStatus !== ' ') {
            // Send to Database
            console.log(customStatus);
            console.log(expireFunction(dropdownExpire))
        }
        // Conditional to update literal status
        if (realStatus !== data?.me?.status) {
            console.log('Update Status Database')
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
            <div data-value='date' onClick={handleDropdown} >{expireDropdown ? <ExpireDropdown/> : <></>}</div>
            <div data-value='status' onClick={handleDropdown}>{statusDropdown ? <StatusDropdown status={realStatus}/> : <></>}</div>
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
                                <input value={input} onChange={handleChange} type='name' name='CustomStatus' maxLength={30} placeholder='Support has arrived'  className='normal-font f300 real-input-status' autoFocus/>
                            </div>

                            <label className='normal-font f500 status-label'>Clear After</label>

                            <div data-value='date' onClick={handleDropdown} className='fake-input-status' style={{cursor: 'pointer'}}>
                                <p className='expire-choice normal-font'>{dropdownExpire}</p>
                                <IoChevronDownSharp className={'custon-dropdown-arrow ' + (expireDropdown ? 'flip-chevron' : '')} />
                            </div>

                            <div style={{borderBottom: '1px solid #424549', marginBottom: '10px'}}></div>

                            <label className='normal-font f500 status-label'>Status</label>
                            <div data-value='status' onClick={handleDropdown} className='fake-input-status' style={{cursor: 'pointer'}}>
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

import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { CUSTOM_EMOJI_CHOICE, SET_EMOJI_MODAL, TOGGLE_CUSTOM_STATUS, UPDATE_EMOJI_POSITION } from '../../redux/actions';
import Wumpus from '../../images/Status-Wumpus.svg'
import './statusModal.scss'
import { IoCloseOutline } from "react-icons/io5";
import { emojiArr } from '../../utils/emojiArr';
import { IoCloseCircle, IoChevronDownSharp } from "react-icons/io5";
import emoji from 'react-easy-emoji';
import ExpireDropdown from './Dropdowns/ExpireDropdown';
import StatusDropdown from './Dropdowns/StatusDropdown';

function CustomStatusModal() {
    const dispatch = useDispatch();
    const { customStatusModal, emojiModal, emojiChoice } = useSelector((state: RootStateOrAny) => state);

    const [realChoice, setEmoji] = useState('0px 0px');
    const [input, setInput] = useState('');
    const [expireDropdown, setExpireDrop] = useState(false);
    const [statusDropdown, setStatusDrop] = useState(false);

    const handleDropdown = (e) => {
        const type = e.currentTarget.getAttribute('data-value');
        if (type === 'date') {
            setExpireDrop(!expireDropdown)
        } else {
            setStatusDrop(!statusDropdown)
        }
    };

    const hideModal = (e) => {
        if(e.target === e.currentTarget) {
            dispatch({ type: TOGGLE_CUSTOM_STATUS, showModal: false});
            dispatch({ type: SET_EMOJI_MODAL, emojiModal: false});
            dispatch({ type: CUSTOM_EMOJI_CHOICE, emoji: ''});
            setExpireDrop(false);
            setStatusDrop(false);
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
        if (emojiModal === true) {
            dispatch({ type: SET_EMOJI_MODAL, emojiModal: false});
        } else {
            dispatch({ type: SET_EMOJI_MODAL, emojiModal: true});
            dispatch({ type: UPDATE_EMOJI_POSITION, left: e.pageX, top: e.pageY});
        }
        
    };

    return (
        <div onClick={hideModal} className={'modal-container ' + (customStatusModal ? 'show' : 'hide')}>
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
                                <p className='expire-choice normal-font'>Today</p>
                                <IoChevronDownSharp className={'custon-dropdown-arrow ' + (expireDropdown ? 'flip-chevron' : '')} />
                                {expireDropdown ? <ExpireDropdown/> : <></>}
                            </div>

                            <div style={{borderBottom: '1px solid #424549', marginBottom: '10px'}}></div>

                            <label className='normal-font f500 status-label'>Status</label>
                            <div data-value='status' onClick={handleDropdown} className='fake-input-status' style={{cursor: 'pointer'}}>
                                <p className='expire-choice normal-font'>Online</p>
                                <IoChevronDownSharp className={'custon-dropdown-arrow ' + (statusDropdown ? 'flip-chevron' : '')} />
                                {statusDropdown ? <StatusDropdown/> : <></>}
                            </div>
                    </section>
                </section>
                <section className='custom-status-form-container'>
                    <p onClick={hideModal} className='status-form-button-container normal-font'>Cancel</p>
                    <p onClick={hideModal} className='status-form-button-container normal-font purple-status-button-custom'>Save</p>
                </section>
            </section>
        </div>
    )
}

export default CustomStatusModal

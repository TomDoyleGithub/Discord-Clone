import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { TOGGLE_CUSTOM_STATUS } from '../../redux/actions';
import Wumpus from '../../images/Status-Wumpus.svg'
import './statusModal.scss'
import { IoCloseOutline } from "react-icons/io5";
import { emojiArr } from '../../utils/emojiArr';
import { IoCloseCircle, IoChevronDownSharp } from "react-icons/io5";

function CustomStatusModal() {
    const [realChoice, setEmoji] = useState('0px 0px');
    const [input, setInput] = useState('');


    const dispatch = useDispatch();
    const hideModal = (e) => {
        if(e.target === e.currentTarget) {
            dispatch({ type: TOGGLE_CUSTOM_STATUS, showModal: false});
         }
    };
    const { customStatusModal  } = useSelector((state: RootStateOrAny) => state);

    const changeEmoji = () => {
        const random = Math.floor(Math.random() * emojiArr.length);
        setEmoji(emojiArr[random])
    };

    const handleChange = (event: any) => {
        const val = event.target.value
        setInput(val)
    };

    const clearInput = () => {
        setInput('')
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
                                <div onMouseEnter={changeEmoji} className='emoji-sprite' style={{backgroundPosition: realChoice}}></div>
                                {input !== '' ? <IoCloseCircle className='clear-input' onClick={clearInput}/> : <></>}
                                <input value={input} onChange={handleChange} type='name' name='CustomStatus' maxLength={30} placeholder='Support has arrived'  className='normal-font f300 real-input-status'/>
                            </div>

                            <label className='normal-font f500 status-label'>Clear After</label>
                            <div className='fake-input-status' style={{cursor: 'pointer'}}>
                                <p className='expire-choice normal-font'>Today</p>
                                <IoChevronDownSharp className='custon-dropdown-arrow' />
                            </div>

                            <div style={{borderBottom: '1px solid #424549', marginBottom: '10px'}}></div>

                            <label className='normal-font f500 status-label'>Status</label>
                            <div className='fake-input-status' style={{cursor: 'pointer'}}>
                                <p className='expire-choice normal-font'>Online</p>
                                <IoChevronDownSharp className='custon-dropdown-arrow' />
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

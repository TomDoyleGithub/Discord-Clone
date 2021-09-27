import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { TOGGLE_CUSTOM_STATUS } from '../../redux/actions';
import Wumpus from '../../images/Status-Wumpus.svg'
import './statusModal.scss'
import { IoCloseOutline } from "react-icons/io5";
import defaultEmoji from '../../images/emoji-default.svg';
import { e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18 } from '../../images'

function CustomStatusModal() {
    const [realChoice, setEmoji] = useState(defaultEmoji)
    const emojiArr = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18];

    const changeEmoji = () => {
        const random = Math.floor(Math.random() * emojiArr.length);
        setEmoji(emojiArr[random])
    };

    const dispatch = useDispatch();
    const hideModal = (e) => {
        if(e.target === e.currentTarget) {
            dispatch({ type: TOGGLE_CUSTOM_STATUS, showModal: false});
         }
    };
    const { customStatusModal  } = useSelector((state: RootStateOrAny) => state);
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
                                <img className='select-emoji'  alt='default-emoji-icon' onMouseEnter={changeEmoji} src={realChoice}/>
                                <input type='name' name='CustomStatus' maxLength={30} placeholder='Support has arrived'  className='normal-font f300 real-input-status'/>
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

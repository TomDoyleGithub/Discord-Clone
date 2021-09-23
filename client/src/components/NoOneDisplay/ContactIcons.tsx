import React, { useState } from 'react'
import { IoChatbox, IoEllipsisVerticalSharp } from "react-icons/io5";
import CardModal from './CardModal/CardModal'
function ContactIcons({user}) {
    const [thisState, setThisState] = useState('');
    const pageStatusEvent = () => {
        setThisState('');
        window.removeEventListener('click', pageStatusEvent);
    }
    const handleClick = (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-value');
        setThisState('');
        setThisState(id);
        window.addEventListener('click', pageStatusEvent);
    };

    return (
        <section className='choose-request-container'>
            <section data-value={user.user._id} className='ticky-one'>
                <aside className='pending-tooltip normal-font f500 ticky-one-accept'>Message</aside>
                <IoChatbox className='message-friend-icon'/>
            </section>
            <section onClick={handleClick}  data-value={user.user._id} className='ticky-two'>
                <aside className='pending-tooltip normal-font f500 ticky-two-ignore'>More</aside>
                <IoEllipsisVerticalSharp className='message-friend-icon' />
                <CardModal id={user.user._id} state={thisState}/>
            </section>
        </section>
    )
}

export default ContactIcons

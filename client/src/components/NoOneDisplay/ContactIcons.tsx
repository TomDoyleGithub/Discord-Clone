import React, { useState } from 'react'
import { IoChatbox, IoEllipsisVerticalSharp } from "react-icons/io5";
import CardModal from './CardModal/CardModal'
function ContactIcons({user}) {
    const [thisState, setThisState] = useState('');

    const handleClick = (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-value');
        if (!thisState) {
            setThisState(id);
        } else {
            setThisState('');
        }
    };

    const handleHover = (e) => {
        const id = e.currentTarget.getAttribute('data-value');
        if (id === thisState) {
            setThisState('');
        }
    };

    return (
        <section className='choose-request-container'>
            <section data-value={user.user._id} className='ticky-one'>
                <aside className='pending-tooltip normal-font f500 ticky-one-accept'>Message</aside>
                <IoChatbox className='message-friend-icon'/>
            </section>
            <section onClick={handleClick} onMouseLeave={handleHover}  data-value={user.user._id} className={'ticky-two ' + (!thisState ? 'active-ticky' : '')}>
                <aside className={'pending-tooltip normal-font f500 ticky-two-ignore ' + (thisState ? 'hiiiides' : '')}>More</aside>
                <IoEllipsisVerticalSharp className='message-friend-icon' />
                <CardModal state={thisState}/>
            </section>
        </section>
    )
}

export default ContactIcons

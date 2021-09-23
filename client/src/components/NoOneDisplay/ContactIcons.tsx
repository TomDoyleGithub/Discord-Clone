import React from 'react'
import { IoChatbox, IoEllipsisVerticalSharp } from "react-icons/io5";
import CardModal from './CardModal/CardModal'
function ContactIcons({user}) {
    return (
        <section className='choose-request-container'>
            <section data-value={user.user._id} className='ticky-one'>
                <aside className='pending-tooltip normal-font f500 ticky-one-accept'>Message</aside>
                <IoChatbox className='message-friend-icon'/>
            </section>
            <section data-value={user.user._id} className='ticky-two'>
                <aside className='pending-tooltip normal-font f500 ticky-two-ignore'>More</aside>
                <IoEllipsisVerticalSharp className='message-friend-icon' />
                <CardModal/>
            </section>
        </section>
    )
}

export default ContactIcons

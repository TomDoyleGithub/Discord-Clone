import React from 'react'
import ProPic from '../StandardProPic/ProPic';
import { IoChatbox, IoEllipsisVerticalSharp } from "react-icons/io5";

function AllFriends({allLength, allResults}) {
    return (
        <section className='friend-card-container'>
            <section className='sub-friend-card-container'>
                <p className='pending-label normal-font f500'>All Friends — {allLength}</p>
                {allResults.map((user) => (
                    
                    <section className='pendly-card' key={user.user._id}>
                        <section>
                            <ProPic />
                            <section className='invisible real-status request-status'>
                                <section className='hole-dot'></section>
                            </section>
                        </section>
                        <section>
                        <p>
                            <span className='request-card-username header-font f700'>{user.user.username.slice(0, -5)}</span>
                            <span className='normal-font request-card-code'>{user.user.username.slice(Math.max(user.user.username?.length - 5, 0))}</span>
                        </p>
                            <p className='normal-font friend-card-subby'>Offline</p>
                        </section>
                        <section className='choose-request-container'>
                            <section data-value={user.user._id} className='ticky-one'>
                                <aside className='pending-tooltip normal-font f500 ticky-one-accept'>Message</aside>
                                <IoChatbox className='message-friend-icon'/>
                            </section>
                            <section data-value={user.user._id} className='ticky-two'>
                                <aside className='pending-tooltip normal-font f500 ticky-two-ignore'>More</aside>
                                <IoEllipsisVerticalSharp className='message-friend-icon' />
                            </section>
                        </section>
                    </section>
            ))}
            </section>
        </section>
    )
}

export default AllFriends

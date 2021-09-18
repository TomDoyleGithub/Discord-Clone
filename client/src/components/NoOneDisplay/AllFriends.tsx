import React from 'react'
import CardUser from './CardUser';

import { IoChatbox, IoEllipsisVerticalSharp } from "react-icons/io5";

function AllFriends({allLength, allResults}) {
    return (
        <section className='friend-card-container'>
            <section className='sub-friend-card-container'>
                <p className='pending-label normal-font f500'>All Friends — {allLength}</p>
                {allResults.map((user) => (
                    <section className='pendly-card' key={user.user._id}>
                        <CardUser user={user} pageType={'all'}/>

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

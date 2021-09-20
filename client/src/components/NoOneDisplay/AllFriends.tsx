import React from 'react'
import CardUser from './CardUser';
import ContactIcons from './ContactIcons';


function AllFriends({onlineUsers, allLength, allResults}) {
    return (
        <section className='friend-card-container'>
            <section className='sub-friend-card-container'>
                <p className='pending-label normal-font f500'>All Friends — {allLength}</p>
                {allResults.map((user) => (
                    <section className='pendly-card' key={user.user._id}>
                        <CardUser onlineUsers={onlineUsers} user={user} pageType={'all'}/>
                        <ContactIcons user={user}/>
                    </section>
            ))}
            </section>
        </section>
    )
}

export default AllFriends

import React from 'react'

function AllFriends({allLength}) {
    return (
        <section className='friend-card-container'>
            <section className='sub-friend-card-container'>
                <p className='pending-label normal-font f500'>All Friends — {allLength}</p>
            </section>
        </section>
    )
}

export default AllFriends

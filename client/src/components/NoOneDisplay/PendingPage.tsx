import React from 'react'

function PendingPage({ pendingLength, pendingResults }) {
    return (
        <section className='friend-card-container'>
            <section className='sub-friend-card-container'>
                <p className='pending-label normal-font f500'>Pending — {pendingLength}</p>
                {pendingResults.map((user) => (
                    user.status === 1 ? (
                        <section key={user.user._id}>
                            <p>{user.user.username}</p>
                            <p>{user.status}</p>
                        </section>
                    ) : (
                        <section key={user.user._id}>
                            <p>{user.user.username}</p>
                            <p>{user.status}</p>
                        </section>
                    )
                ))}
            <section className='pending-card'></section>
            </section>
        </section>
    )
}

export default PendingPage

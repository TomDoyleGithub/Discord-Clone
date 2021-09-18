import React from 'react'

function ButtonDisplay({user, pageType}) {
    if (pageType === 'pending') {
        return (
            <>
                {user.status === 1 ? (
                    <p className='normal-font request-card-subby'>Outgoing Friend Request</p>
                ) : (
                    <p className='normal-font request-card-subby'>Incoming Friend Request</p>
                )}
            </>
        )
    } else if (pageType === 'all') {
        return (
            <p className='normal-font friend-card-subby'>Offline</p>
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default ButtonDisplay

import React from 'react'
import WordStatus from './WordStatus';

function ButtonDisplay({user, pageType, onlineUsers}) {
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
            <WordStatus onlineUsers={onlineUsers} id={user.user._id} status={user.user.status} customStatus={user.user.customStatus} />
        )
    }
    return (
        <div>
            
        </div>
    )
}

export default ButtonDisplay

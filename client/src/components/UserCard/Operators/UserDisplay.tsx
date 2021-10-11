import React from 'react';
import emoji from 'react-easy-emoji';

function UserDisplay({username, customStatus, me}) {
    return (
        <>
            { username?.length > 8 ? (
                <p className='username header-font f700'>{`${username?.slice(0, 9)}...`}</p>
            ) : (
                <p className='username header-font f700'>{username}</p>
            )}
            
            {customStatus === '' || customStatus === '~' ? (
                <p className='user-code normal-font'>{me?.username?.slice(Math.max(me?.username?.length - 5, 0))}</p>
            ) : (
                <div className='custom-status-usercard'>
                    <p className='user-code normal-font'>{emoji(`${customStatus?.replace(/~/g, ' ')}`)}</p>
                    <p className='user-code normal-font'>{me?.username?.slice(Math.max(me?.username?.length - 5, 0))}</p>
                </div>
            )}
        </>
    )
}

export default UserDisplay

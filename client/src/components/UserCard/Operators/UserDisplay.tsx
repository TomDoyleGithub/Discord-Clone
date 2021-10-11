import React from 'react';
import emoji from 'react-easy-emoji';

function UserDisplay({username, customStatus, me}) {

    const slicedUsername = me?.username?.slice(Math.max(me?.username?.length - 5, 0));
    const longUsername = `${username?.slice(0, 9)}...`;
    const emojiDisplay = emoji(`${customStatus?.replace(/~/g, ' ')}`);

    return (
        <>
            { username?.length > 8 ? (
                <p className='username header-font f700'>{longUsername}</p>
            ) : (
                <p className='username header-font f700'>{username}</p>
            )}
            
            {customStatus === '' || customStatus === '~' ? (
                <p className='user-code normal-font'>{slicedUsername}</p>
            ) : (
                <div className='custom-status-usercard'>
                    <p className='user-code normal-font'>{emojiDisplay}</p>
                    <p className='user-code normal-font'>{slicedUsername}</p>
                </div>
            )}
        </>
    )
}

export default UserDisplay

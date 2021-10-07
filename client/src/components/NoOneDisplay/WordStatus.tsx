import React from 'react'
import emoji from 'react-easy-emoji';

function WordStatus({status, onlineUsers, id, customStatus}) {
    let realStatus = status;
    let custStatus = customStatus;


    if (onlineUsers) {
        var ownerData = onlineUsers?.filter(function(user) {
            return user.userId === id;
        });
        realStatus = ownerData[0]?.status;
        if (ownerData[0] !== undefined) {
            custStatus = ownerData[0]?.customStatus;
        }
    };


    if (custStatus !== undefined && custStatus !== '' && custStatus !== '~') {
        return <p className='normal-font friend-card-subby'>{emoji(`${custStatus.replace(/~/g, ' ')}`)}</p>
    } else if (realStatus === 'online') {
        return <p className='normal-font friend-card-subby'>Online</p>
    } else if (realStatus === 'idle') {
        return  <p className='normal-font friend-card-subby'>Idle</p>
    } else if (realStatus === 'do-not-disturb') {
        return <p className='normal-font friend-card-subby'>Do Not Disturb</p>
    } else {
        return <p className='normal-font friend-card-subby'>Offline</p>
    }
}

export default WordStatus

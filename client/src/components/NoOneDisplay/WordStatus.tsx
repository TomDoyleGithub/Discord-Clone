import React from 'react'

function WordStatus({status, onlineUsers, id}) {
    let realStatus = status;
    var ownerData = onlineUsers.filter(function(user) {
        return user.userId === id;
    });
    realStatus = ownerData[0]?.status;
    if (realStatus === 'online') {
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

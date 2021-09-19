import React from 'react'

function WordStatus({status}) {
    if (status === 'online') {
        return <p className='normal-font friend-card-subby'>Online</p>
    } else if (status === 'idle') {
        return  <p className='normal-font friend-card-subby'>Idle</p>
    } else if (status === 'do-not-disturb') {
        return <p className='normal-font friend-card-subby'>Do Not Disturb</p>
    } else {
        return <p className='normal-font friend-card-subby'>Offline</p>
    }
}

export default WordStatus

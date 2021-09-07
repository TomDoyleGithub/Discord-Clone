import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import Online from './StatusIcons/Online'
import Idle from './StatusIcons/Idle'
import Disturb from './StatusIcons/Disturb'
import Invisible from './StatusIcons/Invisible'

function Status({dataStatus}) {
    let status = '';
    const { status: stateStatus } = useSelector((state: RootStateOrAny) => state);

    // Changes the definition of status depending on the redux state
    if ( stateStatus === '') {
        status = dataStatus
    } else {
        status = stateStatus
    }

    if (status === 'online') {
        return <Online/>
    } else if (status === 'idle') {
        return <Idle/>
    } else if (status === 'do-not-disturb') {
        return <Disturb/>
    } else {
        return <Invisible/>
    }
}

export default Status

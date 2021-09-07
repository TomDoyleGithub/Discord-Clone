import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';

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
        return <div className={`${status} real-status`}></div>
    } else if (status === 'idle') {
        return (
            <div className={`${status} real-status`}>
                <section></section>
            </div>
        )
    } else if (status === 'do-not-disturb') {
        return (
            <div className={`${status} real-status`}>
                <section></section>
            </div>
        )
    } else {
        return (
            <div className={`${status} real-status`}>
                <section></section>
            </div>
        )
    }
}

export default Status

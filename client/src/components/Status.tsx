import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';

function Status() {
    const { status } = useSelector((state: RootStateOrAny) => state);
    if (status === 'online') {
        return <div className={`${status} real-status`}></div>
    } else if (status === 'idle') {
        return (
            <div className={`${status} real-status`}></div>
        )
    } else if (status === 'do-not-disturb') {
        return (
            <div className={`${status} real-status`}></div>
        )
    } else {
        return (
            <div className={`${status} real-status`}></div>
        )
    }
}

export default Status

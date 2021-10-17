import React from 'react'
import './notify.scss';
import { useSelector, RootStateOrAny } from 'react-redux';

function Notification() {
    const { pendingLength } = useSelector((state: RootStateOrAny) => state);
    if (pendingLength === 0) {
        return <></>
    }
    return (
        <article className='notification normal-font f500'>
            {pendingLength}
        </article>
    )
}

export default Notification

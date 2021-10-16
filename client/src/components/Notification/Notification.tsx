import React from 'react'
import './notify.scss';
import { useSelector, RootStateOrAny } from 'react-redux';

function Notification() {
    const { userData: data } = useSelector((state: RootStateOrAny) => state);
    const notifications = data?.me?.friendNotifactions;
    console.log(notifications)
    if (notifications === 0) {
        return <></>
    }
    return (
        <article className='notification normal-font f500'>
            {notifications}
        </article>
    )
}

export default Notification

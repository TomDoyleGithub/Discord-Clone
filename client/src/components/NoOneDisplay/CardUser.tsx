import React from 'react'
import ProPic from '../StandardProPic/ProPic';
import ButtonDisplay from './ButtonDisplay';
import StatusIcon from './StatusIcon';

function CardUser({user, pageType}) {
    return (
        <>
            <section>
                <ProPic />
                <StatusIcon status={user.user.status}/>
            </section>
            <section>
            <p>
                <span className='request-card-username header-font f700'>{user.user.username.slice(0, -5)}</span>
                <span className='normal-font request-card-code'>{user.user.username.slice(Math.max(user.user.username?.length - 5, 0))}</span>
            </p>
                <ButtonDisplay user={user} pageType={pageType}/>
            </section>
        </>
    )
}

export default CardUser

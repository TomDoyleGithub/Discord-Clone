import React from 'react'
import ProPic from '../StandardProPic/ProPic';
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";

function PendingPage({ pendingLength, pendingResults }) {
    return (
        <section className='friend-card-container'>
            <section className='sub-friend-card-container'>
                <p className='pending-label normal-font f500'>Pending — {pendingLength}</p>
                {pendingResults.map((user) => (
                    
                        <section className='pendly-card' key={user.user._id}>
                            <section>
                                <ProPic />
                                <section className='invisible real-status request-status'>
                                    <section className='hole-dot'></section>
                                </section>
                            </section>
                            
                            <section>
                            <p>
                                <span className='request-card-username header-font f700'>{user.user.username.slice(0, -5)}</span>
                                <span className='normal-font request-card-code'>{user.user.username.slice(Math.max(user.user.username?.length - 5, 0))}</span>
                            </p>
                            {user.status === 1 ? (
                                <p className='normal-font request-card-subby'>Outgoing Friend Request</p>
                            ) : (
                                <p className='normal-font request-card-subby'>Incoming Friend Request</p>
                            )}
                            </section>
                            <section className='choose-request-container'>
                            {user.status === 1 ? (
                                <section>
                                    <IoCheckmarkSharp className='pending-icon'/>
                                </section>
                            ) : (
                                <></>
                            )}
                                <section>
                                    <IoCloseSharp className='pending-icon'/>
                                </section>
                            </section>
                        </section>
                ))}
            </section>
        </section>
    )
}

export default PendingPage

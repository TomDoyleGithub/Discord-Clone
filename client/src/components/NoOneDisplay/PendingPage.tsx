import React, { useRef } from 'react'
import ProPic from '../StandardProPic/ProPic';
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { useMutation } from '@apollo/client';
import { ACCEPT_FRIEND } from '../../utils/mutations';
import { RootStateOrAny, useSelector } from 'react-redux';

function PendingPage({ pendingLength, pendingResults }) {
    const { socket } = useSelector((state: RootStateOrAny) => state);
    const upSocket = useRef(socket);
    const [acceptRequest] = useMutation(ACCEPT_FRIEND);
    const handleClick = async (e) => {
        const id = await e.currentTarget.getAttribute('data-value');
        try {
            await acceptRequest({ variables: { id }});
            upSocket.current.emit("sendAccept", {
                id
              });
        } catch (err) {
            console.log(err)
        }
    };

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
                            {user.status !== 1 ? (
                                <section onClick={handleClick} data-value={user.user._id} className='ticky-one'>
                                    <aside className='pending-tooltip normal-font f500 ticky-one-accept'>Accept</aside>
                                    <IoCheckmarkSharp className='pending-icon pending-tick'/>
                                </section>
                            ) : (
                                <></>
                            )}
                                <section data-value={user.user._id}  className='ticky-two'>
                                    <aside className='pending-tooltip normal-font f500 ticky-two-ignore'>Ignore</aside>
                                    <IoCloseSharp className='pending-icon pending-cross'/>
                                </section>
                            </section>
                        </section>
                ))}
            </section>
        </section>
    )
}

export default PendingPage

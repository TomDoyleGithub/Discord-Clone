import React, { useRef } from 'react'
import CardUser from './CardUser';
import { IoCheckmarkSharp, IoCloseSharp } from "react-icons/io5";
import { useMutation } from '@apollo/client';
import { ACCEPT_FRIEND, REMOVE_FRIEND } from '../../utils/mutations';
import { RootStateOrAny, useSelector } from 'react-redux';

function PendingPage({onlineUsers, pendingLength, pendingResults }) {
    const { socket } = useSelector((state: RootStateOrAny) => state);
    const upSocket = useRef(socket);
    const [acceptRequest] = useMutation(ACCEPT_FRIEND);
    const [removeFriend] = useMutation(REMOVE_FRIEND);

    const handleClick = async (e) => {
        const className = e.currentTarget.getAttribute('class');
        const id = e.currentTarget.getAttribute('data-value');
        if (className === 'ticky-one') {
            try {
                await acceptRequest({ variables: { id }});
                upSocket.current.emit("sendAccept", {
                    id
                  });
            } catch (err) {
                console.log(err)
            }
        } else {
            await removeFriend({ variables: { id }});
            upSocket.current.emit("ignoreRequest", {
                id
              });
        }
    };

    return (
        <section className='friend-card-container'>
            <section className='sub-friend-card-container'>
                <p className='pending-label normal-font f500'>Pending — {pendingLength}</p>
                {pendingResults.map((user) => (
                    
                        <section className='pendly-card' key={user.user._id}>
                            <CardUser onlineUsers={onlineUsers} user={user} pageType={'pending'}/>
                            <section className='choose-request-container'>
                            {user.status !== 1 ? (
                                <section onClick={handleClick} data-value={user.user._id} className='ticky-one'>
                                    <aside className='pending-tooltip normal-font f500 ticky-one-accept'>Accept</aside>
                                    <IoCheckmarkSharp className='pending-icon pending-tick'/>
                                </section>
                            ) : (
                                <></>
                            )}
                                <section onClick={handleClick} data-value={user.user._id} className='ticky-two'>
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

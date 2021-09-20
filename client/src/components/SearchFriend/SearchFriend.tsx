import { useMutation } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { SEND_FRIEND } from '../../utils/mutations';
import './searchFriends.scss'

function SearchFriend({friends}) {
    const { socket } = useSelector((state: RootStateOrAny) => state);
    const upSocket = useRef(socket);

    const [username, setUsername ] = useState('');
    const [disable, setDisable] = useState(true);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [sendRequest] = useMutation(SEND_FRIEND);

    const handleChange = (event:any) => {
        const { value } = event.target;
        setUsername(value);
    };
    useEffect(() => {
        if(username !== '') {
            setDisable(false)
        }
    }, [username])

    const handleFormSubmit = async (e) => {
        await e.preventDefault();
        if (friends.some(e => e.user.username === username)) {
            setSuccess(false);
            setError(true);
          } else {
            console.log('They DONT MATCH')
            try {
            await sendRequest({ variables: { username }});
            await upSocket.current.emit("sendRequest", {
                username
              });
            setSuccess(true);
            setError(false);
            setUsername('');
            } catch (err) {
                setSuccess(false);
                setError(true);
            }
      } 
    };

    return (
        <section className='search-friend-container'>
            <section className='sub-friend-container'>
                <p className='normal-font f600 header-add-friend'>Add Friend</p>
                {!error ? (
                    success ? (
                        <p className='normal-font subby-add-friend green-text'>Success! Your friend request was sent.</p>
                    ) : (
                        <p className='normal-font subby-add-friend'>You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</p>
                    )
                ) : (
                    <p className='normal-font subby-add-friend red-text'>Hm, didn't work. Double check that the capitalization, spelling, any spaces, and numbers are correct.</p>
                )}
                <input value={username} onChange={handleChange} autoFocus className='add-friend-input normal-font' placeholder='Enter a Username#0000'></input>
                <form onSubmit={handleFormSubmit}>
                    <button disabled={disable} className={'send-friend-button normal-font ' + (!username ? 'disable-friend-button' : '')} type='submit'>Send Friend Request</button>
                </form>
            </section>
        </section>
    )
}

export default SearchFriend

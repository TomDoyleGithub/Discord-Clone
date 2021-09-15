import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { SEND_FRIEND } from '../../utils/mutations';
import './searchFriends.scss'

function SearchFriend() {

    const [username, setUsername ] = useState('');
    const [sendRequest] = useMutation(SEND_FRIEND);

    const handleChange = (event:any) => {
        const { value } = event.target;
        setUsername(value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            setUsername('');
            await sendRequest({ variables: { username }});
            console.log('Request Sent!')
        } catch (err) {
            console.log('User does not exist!')
        }
    };

    return (
        <section className='search-friend-container'>
            <section className='sub-friend-container'>
                <p className='normal-font f600 header-add-friend'>Add Friend</p>
                <p className='normal-font subby-add-friend'>You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</p>
                <input value={username} onChange={handleChange} autoFocus className='add-friend-input normal-font' placeholder='Enter a Username#0000'></input>
                <form onSubmit={handleFormSubmit}>
                    <button className='send-friend-button normal-font' type='submit'>Send Friend Request</button>
                </form>
            </section>
        </section>
    )
}

export default SearchFriend

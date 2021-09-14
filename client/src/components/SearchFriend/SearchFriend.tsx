import React from 'react'
import './searchFriends.scss'

function SearchFriend() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted!')
    };

    return (
        <section className='search-friend-container'>
            <section className='sub-friend-container'>
                <p className='normal-font f600 header-add-friend'>Add Friend</p>
                <p className='normal-font subby-add-friend'>You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</p>
                <input autoFocus className='add-friend-input normal-font' placeholder='Enter a Username#0000'></input>
                <form onSubmit={handleFormSubmit}>
                    <button className='send-friend-button normal-font' type='submit'>Send Friend Request</button>
                </form>
            </section>
        </section>
    )
}

export default SearchFriend

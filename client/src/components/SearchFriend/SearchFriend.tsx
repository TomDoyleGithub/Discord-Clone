import React from 'react'
import './searchFriends.scss'

function SearchFriend() {
    return (
        <section className='search-friend-container'>
            <section className='sub-friend-container'>
                <p className='normal-font f600 header-add-friend'>Add Friend</p>
                <p className='normal-font subby-add-friend'>You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</p>
                <input autoFocus className='add-friend-input normal-font' placeholder='Enter a Username#0000'></input>
            </section>
        </section>
    )
}

export default SearchFriend

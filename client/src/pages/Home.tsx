import React from 'react'
import HomeNavigation from '../components/HomeNavigation/HomeNavigation'
import FriendNav from '../components/FriendsNav/FriendsNav'
import NoOneDisplay from '../components/NoOneDisplay/NoOneDisplay'
import DeleteFriendModal from '../components/DeleteFriendModal/DeleteFriendModal'

function Home() {
    return (
        <>
            <HomeNavigation/>
            <FriendNav/>
            <DeleteFriendModal/>
            <section className='main-hm-container'>
                <NoOneDisplay/>
            </section>
        </>
    )
}

export default Home

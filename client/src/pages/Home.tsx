import React from 'react'
import HomeNavigation from '../components/HomeNavigation/HomeNavigation'
import FriendNav from '../components/FriendsNav/FriendsNav'
import NoOneDisplay from '../components/NoOneDisplay/NoOneDisplay'

function Home() {
    return (
        <>
            <HomeNavigation/>
            <FriendNav/>
            <section className='main-hm-container'>
                <NoOneDisplay/>
            </section>
        </>
    )
}

export default Home

import React from 'react'
import HomeNavigation from '../components/HomeNavigation/HomeNavigation'
import socket from '../utils/Socket'

function Home() {
    socket.on('Welcome', message => {
        console.log(message)
    })
    return (
        <>
            <HomeNavigation/>
        </>
    )
}

export default Home

import React from 'react'
import './navSide.scss'
import StartConversation from './StartConversation'

function HomeNavigation() {
    return (
        <section className='home-nav-container'>
            <StartConversation/>
            <p>Hello</p>
        </section>
    )
}

export default HomeNavigation

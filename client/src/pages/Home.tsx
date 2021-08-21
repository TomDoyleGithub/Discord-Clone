import React from 'react'
import { Redirect } from 'react-router';

function Home({user}) {
    if (!user){ return <Redirect to='/login'/>}
    return (
        <>
            <p>Home</p>
        </>
    )
}

export default Home

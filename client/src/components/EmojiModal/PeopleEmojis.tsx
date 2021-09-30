import React from 'react'

function PeopleEmojis() {
    const peopleArr = ['0.1px 0px', '-31.9px 0px', '-63.8px 0px', '-95.6px 0px', '127.7px 0px'];
    return (
        <>
            {peopleArr.map((emoji) => (<div className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji}}></div></div>))}
        </>
    )
}

export default PeopleEmojis

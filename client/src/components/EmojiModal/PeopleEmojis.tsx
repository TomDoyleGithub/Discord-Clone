import React from 'react'

function PeopleEmojis() {
    const peopleArr = 
    ['0.1px 0px', 
    '-31.9px 0px', 
    '-63.8px 0px', 
    '-95.6px 0px', 
    '-127.7px 0px',
    '-159.6px 0px',
    '-191.2px 0px',
    '-223.2px 0px',
    '-255.2px 0px',
    '-287.2px 0px',
    '-319.2px 0px',
    '-350.8px 0px',
    '-382.8px 0px',
    '-414.8px 0px',
    '-446.8px 0px',
    '-478.5px 0px',
    '-510.5px 0px',
    '-542.4px 0px',];

    return (
        <>
            {peopleArr.map((emoji) => (<div className='single-emoji-container'><div className='single-emoji' style={{backgroundPosition: emoji}}></div></div>))}
        </>
    )
}

export default PeopleEmojis

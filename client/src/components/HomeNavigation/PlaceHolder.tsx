import React from 'react'

function PlaceHolder() {
    const n = 9;
    return (
        <section className='no-message-container'>
            {[...Array(n)].map((elementInArray, index) => ( 
                <div className="mini-fake-message" key={index} style={{opacity: `0.${index}`}}>
                    <div className='fake-pic'></div>
                    <div className='fake-message'></div>
                </div> 
                ) 
            )}
        </section>
    )
}

export default PlaceHolder

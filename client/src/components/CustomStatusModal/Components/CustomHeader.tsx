import React from 'react';

function CustomHeader({ Wumpus }) {
    return (
        <>
            <section className='head-wumpus-container'>
                <img className='staty-wumpus' src={Wumpus} alt='Happy Wumpus'/>
                <p className='set-status-title normal-font f500'>Set a custom a status</p>
            </section>
        </>
    )
}

export default CustomHeader

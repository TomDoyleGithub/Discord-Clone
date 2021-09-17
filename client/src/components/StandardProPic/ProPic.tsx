import React from 'react'
import './proPic.scss'
import logo from '../../images/Discord-White.svg';

function ProPic() {
    return (
        <section className='pro-fake-circle'>
            <img alt='Discord Icon' src={logo} style={{width: '20px'}}/>
        </section>
    )
}

export default ProPic

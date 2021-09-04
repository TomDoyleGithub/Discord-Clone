import React from 'react'
import './proPic.scss'
import logo from '../../images/Discord-White.svg';

function ProPic() {
    return (
        <div className='pro-fake-circle'>
            <img alt='Discord Icon' src={logo} style={{width: '20px'}}/>
        </div>
    )
}

export default ProPic

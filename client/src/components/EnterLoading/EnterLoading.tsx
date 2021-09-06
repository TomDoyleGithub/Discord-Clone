import React from 'react'
import './enterLoading.scss'
import spinner from '../../images/spinner.gif';

function EnterLoading() {
    return (
        <section className='enter-loading-container'>
            <img src={spinner}  alt='Spinner'  style={{width: '110px'}}/>
            <p className='normal-font did-you-know f500'>Did You Know</p>
            <p className='normal-font f300' style={{opacity: 0.7, marginTop: '12px'}}>This recreation of Discord was only created by one guy!</p>
        </section>
    )
}

export default EnterLoading

import React from 'react'
import './enterLoading.scss'
import { RootStateOrAny, useSelector } from 'react-redux';

function EnterLoading({spinner}) {
    const { largerLoader } = useSelector((state: RootStateOrAny) => state);

    return (
        <section className={ largerLoader ? 'enter-loading-container' : 'hide'}>
            <img src={spinner}  alt='Spinner'  style={{width: '110px'}}/>
            <p className='normal-font did-you-know f500'>Did You Know</p>
            <p className='normal-font f300' style={{opacity: 0.7, textAlign: 'center', padding: '30px'}}>This recreation of Discord was only created by one guy!</p>
        </section>
    )
}

export default EnterLoading

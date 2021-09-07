import React from 'react'
import './changeStatus.scss'
import Online from '../StatusIcons/Online';
import Idle from '../StatusIcons/Idle';
import Disturb from '../StatusIcons/Disturb';
import Invisible from '../StatusIcons/Invisible';
import { useDispatch } from 'react-redux';
import { CHANGE_STATUS } from '../../redux/actions';

function ChangeStatus() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const clickStatus = e.currentTarget.getAttribute('data-value');
        e.stopPropagation(); 
        dispatch({ type: CHANGE_STATUS, status: clickStatus });
    };

    return (
        <div className='change-status-container normal-font'>
            <div className='line' style={{top: '43px'}}></div>
            <div className='line' style={{bottom: '43px'}}></div>
            <section onClick={handleClick} data-value='online' className='status-container'>
                <div><Online/></div>
                <p className='status-word'>Online</p>
            </section>
            <section onClick={handleClick} data-value='idle' className='status-container'>
                <div><Idle/></div>
                <p className='status-word'>Idle</p>
            </section>
            <section onClick={handleClick} data-value='do-not-disturb' className='status-container'>
                <div><Disturb/></div>
                <p className='status-word'>Do Not Disturb</p>
                <p style={{fontSize: '12px', lineHeight: '0.9rem', paddingTop: '4px'}}>You will not recieve any desktop notifications</p>
            </section>
            <section onClick={handleClick} data-value='invisible' className='status-container'>
                <div><Invisible/></div>
                <p className='status-word'>Invisible</p>
                <p style={{fontSize: '12px', lineHeight: '0.9rem', paddingTop: '4px'}}>You will not appear online, but will have full access to all of Discord</p>
            </section>
            <section className='status-container'>
                <p className='status-word'>Set a custom status</p>
            </section>
        </div>
    )
}

export default ChangeStatus

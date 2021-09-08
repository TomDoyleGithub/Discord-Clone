import React, { useEffect } from 'react'
import './changeStatus.scss'
import Online from '../StatusIcons/Online';
import Idle from '../StatusIcons/Idle';
import Disturb from '../StatusIcons/Disturb';
import Invisible from '../StatusIcons/Invisible';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { CHANGE_STATUS, TOGGLE_STATUS_MODAL } from '../../redux/actions';
import { useMutation } from '@apollo/client';
import { STATUS_UPDATE } from '../../utils/mutations';
import defaultEmoji from '../../images/emoji-default.svg';

function ChangeStatus() {
    const dispatch = useDispatch();
    const { statusModal } = useSelector((state: RootStateOrAny) => state);
    const [updateStatus] = useMutation(STATUS_UPDATE);

    const handleClick = (e) => {
        const clickStatus = e.currentTarget.getAttribute('data-value');
        e.stopPropagation(); 
        dispatch({ type: TOGGLE_STATUS_MODAL });
        dispatch({ type: CHANGE_STATUS, status: clickStatus });
        updateStatus({ variables: {status: clickStatus}});
    };


    useEffect(() => {
        const pageStatusEvent = () => {
            dispatch({ type: TOGGLE_STATUS_MODAL });
        };

        if (statusModal === true) {
            window.addEventListener('click', pageStatusEvent);
        }

        return () => {
            window.removeEventListener('click', pageStatusEvent);
          }

    }, [statusModal, dispatch])

    return (
        <div className={'change-status-container normal-font ' + (statusModal ? 'status-show' : 'status-hide')}>
            <div className='lineStat' style={{top: '43px'}}></div>
            <div className='lineStat' style={{bottom: '43px'}}></div>
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
                <img style={{width: '14px', position: 'absolute', left: '6px'}} alt='default-emoji-icon' src={defaultEmoji}/>
                <p className='status-word'>Set a custom status</p>
            </section>
        </div>
    )
}

export default ChangeStatus
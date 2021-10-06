import React, { useEffect } from 'react'
import './changeStatus.scss'
import Online from '../StatusIcons/Online';
import Idle from '../StatusIcons/Idle';
import Disturb from '../StatusIcons/Disturb';
import Invisible from '../StatusIcons/Invisible';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { CHANGE_STATUS, TOGGLE_CUSTOM_STATUS, TOGGLE_STATUS_MODAL } from '../../redux/actions';
import { useMutation } from '@apollo/client';
import { STATUS_UPDATE } from '../../utils/mutations';
import defaultEmoji from '../../images/emoji-default.svg';
import emoji from 'react-easy-emoji';
import { IoCloseCircleSharp } from "react-icons/io5";

function ChangeStatus({ customStatus }) {
    const items = customStatus?.split('~');
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

    const customClick = () => {
        dispatch({ type: TOGGLE_CUSTOM_STATUS, customStatusModal: true});
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
            <section onClick={customClick} className='status-container custom-stas'>
                {customStatus === '' || customStatus === '~' ? (
                    <>
                        <img style={{width: '14px', position: 'absolute', left: '6px'}} alt='default-emoji-icon' src={defaultEmoji}/>
                        <p className='status-word'>Set a custom status</p>
                    </>
                ) : (
                    <>
                    {items?.[0] ? (
                        <>
                        <span style={{width: '14px', position: 'absolute', left: '3px', bottom: '7px'}}>{emoji(`${items?.[0]}`)}</span>
                        {items?.[1] ? <p className='status-word'>{items?.[1]}</p> : <p className='status-word'>Edit Custom Status</p>}
                        </> 
                    ) : (
                        <section className='status-word'>{items?.[1]}</section>
                    ) }
                    <IoCloseCircleSharp style={{fontSize: '18px', position: 'absolute', right: '6px', bottom: '7px'}}/>
                </>
                )}
            </section>
        </div>
    )
}

export default ChangeStatus

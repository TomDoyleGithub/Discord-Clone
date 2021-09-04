import React from 'react'
import Auth from '../../utils/auth';
import { HiCog } from 'react-icons/hi';
import ProPic from '../StandardProPic/ProPic';
import mic from '../../images/Mic-On.svg';
import micOff from '../../images/Mic-Off.svg';
import headset from '../../images/Head-on.svg';
import headsetOff from '../../images/Head-Off.svg';
import './userCard.scss';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { UPDATE_DEAFEN, UPDATE_MUTE } from '../../redux/actions';

function UserCard() {
    const dispatch = useDispatch();
    const state = useSelector((state: RootStateOrAny) => state);
    const {mute, deafen} = state;

    const handleCopy = () => {
        // This will copy the data when implemented
        navigator.clipboard.writeText('Punkinut');
    };

    const handleMute = () => {
        dispatch({ type: UPDATE_MUTE});
    };

    const handleDeafen = () => {
        dispatch({ type: UPDATE_DEAFEN});
    };

    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <section className='usercard-container'>
            <ProPic />
            <div className='card-info-container' onClick={handleCopy}>
                <p className='username header-font f700'>Punkinut</p>
                <p className='user-code normal-font'>#4681</p>
            </div>
            <div className='user-icon-container'> 
                <div onClick={handleMute}>
                    {!mute ? (
                        <img src={mic} alt='Mic Icon' style={{width: '12px'}}/>
                    ) : (
                        <img src={micOff} alt='Mic Icon' style={{width: '15px', position: 'relative', left: '0.45px'}}/>
                    )}
                </div>
                <div onClick={handleDeafen}>
                    {!deafen ? (
                        <img src={headset} alt='Mic Icon' style={{width: '17px'}}/>
                    ) : (
                        <img src={headsetOff} alt='Mic Icon' style={{width: '17px'}}/>
                    )}
                </div>
                <div>
                    <HiCog style={{fontSize: '21px', color: '#DCDDDF'}}/>
                </div>
            </div>
        </section>
    )
}

export default UserCard

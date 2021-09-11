import React, { useEffect, useRef, useState } from 'react'
import Status from '../Status'
import Auth from '../../utils/auth';
import { HiCog } from 'react-icons/hi';
import ProPic from '../StandardProPic/ProPic';
import ChangeStatus from '../ChangeStatus/ChangeStatus';
import mic from '../../images/Mic-On.svg';
import micOff from '../../images/Mic-Off.svg';
import headset from '../../images/Head-on.svg';
import headsetOff from '../../images/Head-Off.svg';
import './userCard.scss';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { CHANGE_LOADER, TOGGLE_STATUS_MODAL, UPDATE_DEAFEN, UPDATE_MUTE } from '../../redux/actions';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import mute1 from '../../sounds/mute-1.mp3';
import mute2 from '../../sounds/mute-2.mp3';
import head1 from '../../sounds/head-1.mp3';
import head2 from '../../sounds/head-2.mp3';
import useSound from 'use-sound';

function UserCard() {

    const [playMute] = useSound(mute1);
    const [playUnmute] = useSound(mute2);
    const [playHead] = useSound(head1);
    const [playUnhead] = useSound(head2);
    const [showCopy, setCopy] = useState(false);


    const { data, loading } = useQuery(GET_ME);

    const me = data?.me || {};
    const username = me?.username?.slice(0, -5);
    const userId = me?._id;
    const status = me?.status;

    const dispatch = useDispatch();
    const { mute, deafen, socket } = useSelector((state: RootStateOrAny) => state);


    // BASIC SOCKET
    const upSocket = useRef(socket);

    useEffect(() => {
        upSocket?.current?.on('Welcome', message => {
            console.log(message)
          });
    }, [socket])

    useEffect(() => {
        if (userId) {
            upSocket?.current?.on('SendOffline', id => {
                console.log(`${id} went offline!`)
              });
        }
    }, [userId])

    useEffect(() => {
        if (userId) {
            upSocket?.current?.on('SendOnline', id => {
                console.log(`${id} went Online!`)
              });
        }
        }, [userId])

    useEffect(() => {
        if (userId) {
            upSocket?.current?.emit('login',{ userId });
        }
    }, [userId]);
    // BASIC SOCKET
    

    const handleCopy = () => {
        navigator.clipboard.writeText(me?.username);
        setCopy(true);
        setTimeout(function(){
            setCopy(false);; 
       }, 1000);
    };

    const handleMute = () => {
        dispatch({ type: UPDATE_MUTE});
        if (mute) {
            playMute();
        } else {
            playUnmute();
        };
    };

    const handleDeafen = () => {
        dispatch({ type: UPDATE_DEAFEN});
        if (deafen) {
            playHead();
        } else {
            playUnhead();
        };
    };

    const handleStatus = () => {
        dispatch({ type: TOGGLE_STATUS_MODAL });
    };

    useEffect(() => {
        dispatch({ type: CHANGE_LOADER, userLoad: loading});
    }, [dispatch, loading])

    if (!Auth.loggedIn()) {
        return <></>
    }
    return (
        <section className='usercard-container'>
            <ChangeStatus/>
            <div onClick={handleStatus} className='pro-container'>
                <ProPic />
                <Status dataStatus={status}/>
            </div>
            <div className='card-info-container' onClick={handleCopy}>
                <section className={ !showCopy ? 'user-bubble normal-font f500' : 'hide'}>Click to copy username<AiOutlineCaretRight className='user-triangle' style={{right: '80px'}}/></section>
                <section className={ showCopy ? 'copy-bubble normal-font f500' : 'hide'}>Copied!<AiOutlineCaretRight className='user-triangle' style={{right: '30px', color: '#3aa55d'}}/></section>
                { username?.length > 8 ? (
                    <p className='username header-font f700'>{`${username?.slice(0, 9)}...`}</p>
                ) : (
                    <p className='username header-font f700'>{username}</p>
                )}
                <p className='user-code normal-font'>{me?.username?.slice(Math.max(me?.username?.length - 5, 0))}</p>
            </div>
            <div className='user-icon-container'> 
                <div onClick={handleMute}>
                    {!mute ? (
                        <>
                        <section className='user-bubble normal-font f500'>Mute<AiOutlineCaretRight className='user-triangle' style={{right: '20px'}}/></section>
                        <img src={mic} alt='Mic Icon' style={{width: '12px'}}/>
                        </>
                    ) : (
                        <>
                        <section className='user-bubble normal-font f500'>Unmute<AiOutlineCaretRight className='user-triangle' style={{right: '28px'}}/></section>
                        <img src={micOff} alt='Mic Icon' style={{width: '15px', position: 'relative', left: '0.45px'}}/>
                        </>
                    )}
                </div>
                <div onClick={handleDeafen}>
                    {!deafen ? (
                        <>
                        <section className='user-bubble normal-font f500'>Deafen<AiOutlineCaretRight className='user-triangle' style={{right: '26px'}}/></section>
                        <img src={headset} alt='Mic Icon' style={{width: '17px'}}/>
                        </>
                    ) : (
                        <>
                        <section className='user-bubble normal-font f500'>Undeafen<AiOutlineCaretRight className='user-triangle' style={{right: '34px'}}/></section>
                        <img src={headsetOff} alt='Mic Icon' style={{width: '17px'}}/>
                        </>
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

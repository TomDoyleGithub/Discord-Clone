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
import { CHANGE_LOADER, SET_USERDATA, TOGGLE_STATUS_MODAL, UPDATE_DEAFEN, UPDATE_MUTE } from '../../redux/actions';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import mute1 from '../../sounds/mute-1.mp3';
import mute2 from '../../sounds/mute-2.mp3';
import head1 from '../../sounds/head-1.mp3';
import head2 from '../../sounds/head-2.mp3';
import useSound from 'use-sound';
import { CUSTOM_STATUS } from '../../utils/mutations';
import { handleStatus } from './CardFunctions/handleStatus';
import { handleMute } from './CardFunctions/handleMute';
import { handleDeafen } from './CardFunctions/handleDeafen';
import { handleCopy } from './CardFunctions/handleCopy';
import UserDisplay from './Operators/UserDisplay';
import AudioChoice from './Operators/AudioChoice';
import HeadsetChoice from './Operators/HeadsetChoice';


function UserCard() {
    // States that pertain to this file
    const [playMute] = useSound(mute1);
    const [playUnmute] = useSound(mute2);
    const [playHead] = useSound(head1);
    const [playUnhead] = useSound(head2);
    const [showCopy, setCopy] = useState(false);
    const dispatch = useDispatch();

    // Query that gets the all the data from the logged in user
    const { data, loading } = useQuery(GET_ME);
    const [customStatusMut] = useMutation(CUSTOM_STATUS);

    // Passes user data to redux so that we don't have to keep calling the same query throughout the application
    useEffect (() => {
        dispatch({ type: SET_USERDATA, data, loading});
    }, [data, dispatch, loading])

    // Below gets the redux states and sets up the dispatch along with the socket reference
    const { mute, deafen, socket } = useSelector((state: RootStateOrAny) => state);
    const upSocket = useRef(socket);

    const me = data?.me || {};
    const username = me?.username?.slice(0, -5);
    const userId = me?._id;
    const status = me?.status;
    const customStatus = me?.customStatus;
    const expireDate = parseInt(me?.expireDate);
    const today = new Date();
    const todayHours = today.setHours( today.getHours());

    // Clears the custom status on the users set expiry date
    useEffect(() => {
        if (expireDate === 0) {
            console.log()
        } else if (expireDate < todayHours) {
            customStatusMut({ variables: {customStatus: '', expireDate: ''}});
        }
    }, [expireDate, todayHours, customStatusMut, customStatus]);


    // The first initial socket connection the fires off when a user logs in which transfers the data
    useEffect(() => {
        if (userId) {
            upSocket?.current?.emit('login',
            { 
                userId, 
                username: me?.username, 
                status: me?.status, 
                customStatus: me?.customStatus 
            });
        }
    }, [userId, me?.username, me?.status, me?.customStatus ]);
    
    useEffect(() => {
        dispatch({ type: CHANGE_LOADER, userLoad: loading});
    }, [dispatch, loading]);

    if (!Auth.loggedIn() || loading) {
        return <></>
    }
    return (
        <section className='usercard-container'>
            <ChangeStatus customStatus={customStatus} />
            <div onClick={() => handleStatus(dispatch, TOGGLE_STATUS_MODAL)} className='pro-container'>
                <ProPic />
                <Status dataStatus={status}/>
            </div>

            <div className='card-info-container' onClick={() => handleCopy(me, setCopy)}>
                <section className={ !showCopy ? 'user-bubble normal-font f500' : 'hide'}>Click to copy username<AiOutlineCaretRight className='user-triangle' style={{right: '80px'}}/></section>
                <section className={ showCopy ? 'copy-bubble normal-font f500' : 'hide'}>Copied!<AiOutlineCaretRight className='user-triangle' style={{right: '30px', color: '#3aa55d'}}/></section>
                <UserDisplay username={username} customStatus={customStatus} me={me}/>
            </div>

            <div className='user-icon-container'> 
                <div onClick={() => handleMute(dispatch, mute, playMute, playUnmute, UPDATE_MUTE)}>
                    <AudioChoice mute={mute} mic={mic} micOff={micOff}/>
                </div>
                <div onClick={() => handleDeafen(dispatch, deafen, playHead, playUnhead, UPDATE_DEAFEN)}>
                    <HeadsetChoice deafen={deafen} headset={headset} headsetOff={headsetOff} />
                </div>
                <div>
                    <HiCog style={{fontSize: '21px', color: '#DCDDDF'}}/>
                </div>
            </div>
        </section>
    )
}

export default UserCard

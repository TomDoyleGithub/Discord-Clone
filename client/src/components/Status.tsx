import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Online from './StatusIcons/Online';
import Idle from './StatusIcons/Idle';
import Disturb from './StatusIcons/Disturb';
import Invisible from './StatusIcons/Invisible';
import { useIdleTimer } from 'react-idle-timer';
import { CHANGE_STATUS } from '../redux/actions';

function Status({dataStatus}) {
    const dispatch = useDispatch();

    let status = '';
    const { status: stateStatus } = useSelector((state: RootStateOrAny) => state);

    const handleOnIdle = event => {
        if (status === 'online') {
            dispatch({ type: CHANGE_STATUS, status: 'idle' });
        }
      }
    
    const handleOnActive = event => {
        if (dataStatus === 'online') {
            dispatch({ type: CHANGE_STATUS, status: 'online' });
        }
    }
      
    useIdleTimer({
      timeout: 5000,
      onIdle: handleOnIdle,
      onActive: handleOnActive,
      debounce: 500
    });

    // Changes the definition of status depending on the redux state
    if ( stateStatus === '') {
        status = dataStatus
    } else {
        status = stateStatus
    }

    if (status === 'online') {
        return <Online/>
    } else if (status === 'idle') {
        return <Idle/>
    } else if (status === 'do-not-disturb') {
        return <Disturb/>
    } else {
        return <Invisible/>
    }
}

export default Status

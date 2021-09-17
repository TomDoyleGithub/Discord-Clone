import React, { useEffect, useRef } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import AsleepWumpus from '../WumpusDisplay/AsleepWumpus';
import PlayWumpus from '../WumpusDisplay/PlayWumpus';
import LeafWumpus from '../WumpusDisplay/LeafWumpus';
import BlockWumpus from '../WumpusDisplay/BlockWumpus';
import FriendWumpus from '../WumpusDisplay/FriendWumpus';
import { CHANGE_LOADER } from '../../redux/actions';
import { GET_FRIENDS } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import PendingPage from './PendingPage';
import './noOneDisplay.scss'
import { ACCEPT_FRIEND, GET_FRIEND_REQUEST } from '../../utils/mutations';

function NoOneDisplay() {
    const { data, loading } = useQuery(GET_FRIENDS);
    const [getRequest] = useMutation(GET_FRIEND_REQUEST);
    const [acceptRequest] = useMutation(ACCEPT_FRIEND);
    const allFriends = data?.getFriends?.friends || [];

    const dispatch = useDispatch();
    const { friendsNav, socket } = useSelector((state: RootStateOrAny) => state);
    const upSocket = useRef(socket);


    useEffect(() => {
        upSocket?.current?.on('getRequest', (data) => {
            const id = data?.id
            getRequest({ variables: { id }});
        })
    }, [getRequest]);

    useEffect(() => {
        upSocket?.current?.on('getAccept', (data) => {
            const id = data?.id
            acceptRequest({ variables: { id }});
        })
    }, [acceptRequest]);

    const pending = allFriends?.some(e => e?.status === 1 || e?.status === 2);
    const pendingResults = allFriends?.filter(e => e?.status === 1 || e?.status === 2);
    const pendingLength = allFriends?.filter(e => e?.status === 1 || e?.status === 2).length;
    const acceptedFriends = allFriends?.some(e => e?.status === 3);


    useEffect(() => {
        dispatch({ type: CHANGE_LOADER, userLoad: loading});
    }, [dispatch, loading]);

    if (loading) {
        return (
            <></>
        )
    } else if (friendsNav === 'online') {
        return <AsleepWumpus/>
    } else if (friendsNav === 'all') {
        if (acceptedFriends) {
            return <p>You Have Friends</p>
        } else {
            return <PlayWumpus/>
        }
    } else if (friendsNav === 'pending') {
        if (pending) {
            return <PendingPage pendingLength={pendingLength} pendingResults={pendingResults}/>
        } else {
            return <LeafWumpus/>
        }
    } else if (friendsNav === 'blocked') {
        return <BlockWumpus/>
    } else if (friendsNav === 'add-friend') {
        return <FriendWumpus/>
    }
    return <></>
}

export default NoOneDisplay

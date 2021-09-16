import React, { useEffect, useRef, useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import AsleepWumpus from '../WumpusDisplay/AsleepWumpus';
import PlayWumpus from '../WumpusDisplay/PlayWumpus';
import LeafWumpus from '../WumpusDisplay/LeafWumpus';
import BlockWumpus from '../WumpusDisplay/BlockWumpus';
import FriendWumpus from '../WumpusDisplay/FriendWumpus';
import { CHANGE_LOADER } from '../../redux/actions';
import { GET_FRIENDS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import PendingPage from './PendingPage';
import './noOneDisplay.scss'

function NoOneDisplay() {
    const [allFriends, setFriends]:any = useState([]);
    const { data, loading } = useQuery(GET_FRIENDS);

    const dispatch = useDispatch();
    const { friendsNav, socket } = useSelector((state: RootStateOrAny) => state);
    const upSocket = useRef(socket);

    useEffect(() => {
        const allFriends = data?.getFriends?.friends || [];
        setFriends(allFriends)
    }, [data?.getFriends?.friends ])

    useEffect(() => {
        upSocket?.current?.on('getRequest', (data) => {
            setFriends(data?.friends);
        })
    }, [])

    console.log(allFriends);

    const pending = allFriends?.some(e => e?.status === 1 || e?.status === 2);
    const pendingResults = allFriends?.filter(e => e?.status === 1 || e?.status === 2);
    const pendingLength = allFriends?.filter(e => e?.status === 1 || e?.status === 2).length;

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
        return <PlayWumpus/>
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

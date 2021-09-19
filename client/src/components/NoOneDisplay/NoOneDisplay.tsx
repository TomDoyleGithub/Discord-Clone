import React, { useEffect, useRef, useState } from 'react'
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
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';
import './noOneDisplay.scss'
import { ACCEPT_FRIEND, GET_FRIEND_REQUEST, REMOVE_FRIEND } from '../../utils/mutations';

function NoOneDisplay() {
    const { data, loading } = useQuery(GET_FRIENDS);
    const [getRequest] = useMutation(GET_FRIEND_REQUEST);
    const [acceptRequest] = useMutation(ACCEPT_FRIEND);
    const [removeFriend] = useMutation(REMOVE_FRIEND);
    const allFriends = data?.getFriends?.friends || [];

    let onlineFriends;

    const [onlineUsers, setOnlineUsers]:any = useState();

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

    useEffect(() => {
        upSocket?.current?.on('getIgnore', (data) => {
            const id = data?.id
            removeFriend({ variables: { id }});
        })
    }, [removeFriend]);

    useEffect(() => {
        upSocket?.current?.on('getUsers', (data) => {
            setOnlineUsers(data)
        })
    }, []);

    const pending = allFriends?.some(e => e?.status === 1 || e?.status === 2);
    const pendingResults = allFriends?.filter(e => e?.status === 1 || e?.status === 2);
    const pendingLength = pendingResults.length;
    const acceptedFriends = allFriends?.some(e => e?.status === 3);
    const allResults = allFriends?.filter(e => e?.status === 3);
    const allLength = allResults?.length;


    if (onlineUsers) {
        let onlineIds = onlineUsers.map(e => e.userId)
        let friendIds = allResults.map(e => e.user._id);
        const intersection = onlineIds.filter(element => friendIds.includes(element));
        if (intersection[0] !== undefined) {
            intersection.forEach((id) => {
                onlineFriends = allResults.filter(element => element.user._id === id)
            })
        }
    };

    useEffect(() => {
        if (onlineFriends) {
            console.log(onlineFriends)
        } else {
            console.log('No Friends Online')
        }
    }, [onlineFriends]);
        

    useEffect(() => {
        dispatch({ type: CHANGE_LOADER, userLoad: loading});
    }, [dispatch, loading]);

    if (loading) {
        return (
            <></>
        )
    } else if (friendsNav === 'online') {
        if (onlineFriends) {
            return <OnlineFriends onlineFriends={onlineFriends}/>
        }
        return <AsleepWumpus/>
    } else if (friendsNav === 'all') {
        if (acceptedFriends) {
            return <AllFriends allLength={allLength} allResults={allResults} />
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

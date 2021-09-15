import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import AsleepWumpus from '../WumpusDisplay/AsleepWumpus';
import PlayWumpus from '../WumpusDisplay/PlayWumpus';
import LeafWumpus from '../WumpusDisplay/LeafWumpus';
import BlockWumpus from '../WumpusDisplay/BlockWumpus';
import FriendWumpus from '../WumpusDisplay/FriendWumpus';
import { CHANGE_LOADER } from '../../redux/actions';
import { GET_FRIENDS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function NoOneDisplay() {
    const { data, loading } = useQuery(GET_FRIENDS);
    const allFriends = data?.getFriends?.friends || {};
    console.log(allFriends);

    const dispatch = useDispatch();
    const { friendsNav } = useSelector((state: RootStateOrAny) => state);

    useEffect(() => {
        dispatch({ type: CHANGE_LOADER, userLoad: loading});
    }, [dispatch, loading]);

    if (loading) {
        return (
            <></>
        )
    } else if (friendsNav === 'online') {
        return (
            <AsleepWumpus/>
        )
    } else if (friendsNav === 'all') {
        return (
            <PlayWumpus/>
        )
    } else if (friendsNav === 'pending') {
        return (
            <LeafWumpus/>
        )
    } else if (friendsNav === 'blocked') {
        return (
            <BlockWumpus/>
        )
    } else if (friendsNav === 'add-friend') {
        return (
            <FriendWumpus/>
        )
    }
    return <></>
}

export default NoOneDisplay

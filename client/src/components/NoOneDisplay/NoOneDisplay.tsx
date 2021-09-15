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
import './noOneDisplay.scss'

function NoOneDisplay() {
    const { data, loading } = useQuery(GET_FRIENDS);
    const allFriends = data?.getFriends?.friends || [];

    const dispatch = useDispatch();
    const { friendsNav } = useSelector((state: RootStateOrAny) => state);

    const pending = allFriends?.some(e => e?.status === 1 || e?.status === 2)
    const pendingLength = allFriends?.filter(e => e?.status === 1 || e?.status === 2).length

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
        if (pending) {
            return (
                <section className='friend-card-container'>
                    <section className='sub-friend-card-container'>
                        <p className='pending-label normal-font f500'>Pending — {pendingLength}</p>

                    <section className='pending-card'></section>
                    </section>
                </section>
            )
        } else {
            return <LeafWumpus/>
        }
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

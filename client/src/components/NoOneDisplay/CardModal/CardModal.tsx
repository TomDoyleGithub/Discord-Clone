import React from 'react'
import { useDispatch } from 'react-redux';
import { TOGGLE_FULL_MODAL } from '../../../redux/actions';

function CardModal({id, username, state}) {
    const dispatch = useDispatch();
    const handleClick = () => {
        console.log(`ID: ${id}`);
        console.log(`USERNAME: ${username}`);
        dispatch({ type: TOGGLE_FULL_MODAL, showModal: true});
        // Send these to a modal redux display state so that the modal can show the username and what ID to user
    };
    return (
        <section  className={'card-settings normal-font ' + (state === '' ? 'hidey-time' : 'card-settings-show')}>
            <p className='mini-sub-card-modal greyby-card'>Start Video Call</p>
            <p className='mini-sub-card-modal greyby-card'>Start Voice Call</p>
            <p onClick={handleClick} className='mini-sub-card-modal reddy-card'>Remove Friend</p>
        </section>
    )
}

export default CardModal

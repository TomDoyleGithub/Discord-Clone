import { useMutation } from '@apollo/client';
import React, { useRef } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { MODAL_USER, TOGGLE_FULL_MODAL } from '../../redux/actions';
import { REMOVE_FRIEND } from '../../utils/mutations';

function DeleteFriendModal() {
    const [removeFriend] = useMutation(REMOVE_FRIEND);
    const dispatch = useDispatch();
    const { showScreenModal, modalUsername, modalId, socket } = useSelector((state: RootStateOrAny) => state);
    const upSocket = useRef(socket);

    const handleClick = async (e) => {
        const type = e.currentTarget.getAttribute('data-value');
        dispatch({ type: TOGGLE_FULL_MODAL, showModal: false});
        if (type === 'delete') {
            await removeFriend({ variables: { id: modalId }});
            await upSocket.current.emit("ignoreRequest", {
                id: modalId
              });
        }
        dispatch({ type: MODAL_USER, modalUsername: '', modalId: ''});
    };

    return (
        <div className={'modal-container ' + (showScreenModal ? 'show' : 'hide')}>
        <section className='password-send'>
            <p className='header-font f600' style={{fontSize: "22px", color: 'white'}}>Remove '{modalUsername.slice(0, -5)}'</p>
            <p className='normal-font f300' style={{paddingTop: '20px', color: '#dcddde'}}>Are you sure you want to permanently remove  <strong>{modalUsername.slice(0, -5)}</strong> from your friends?</p>
            <section className='button-container delete-friend-button-container'></section>
            <button data-value='cancel' onClick={handleClick} style={{width: '100px', fontSize: '15px', position: 'absolute', bottom: '13px', right: '140px'}} className='form-button normal-font delete-friend-cancel-button'>Cancel</button>
            <button data-value='delete' onClick={handleClick}  style={{width: '100px', fontSize: '15px', position: 'absolute', bottom: '13px', right: '13px'}} className='form-button normal-font delete-friend-full-button'>Remove Friend</button>
        </section>
    </div>
    )
}

export default DeleteFriendModal

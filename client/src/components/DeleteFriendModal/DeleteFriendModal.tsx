import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { TOGGLE_FULL_MODAL } from '../../redux/actions';

function DeleteFriendModal() {
    const dispatch = useDispatch();
    const { showScreenModal } = useSelector((state: RootStateOrAny) => state);
    const handleClick = () => {
        dispatch({ type: TOGGLE_FULL_MODAL, showModal: false});
    }
    return (
        <div className={'modal-container ' + (showScreenModal ? 'show' : 'hide')}>
        <section className='password-send'>
            <p className='header-font f600' style={{fontSize: "22px", color: 'white'}}>Remove 'Punkinut'</p>
            <p className='normal-font f300' style={{paddingTop: '20px', color: '#dcddde'}}>Are you sure you want to permanently remove  <strong>Punkinut</strong> from your friends?</p>
            <section className='button-container delete-friend-button-container'></section>
            <button onClick={handleClick} style={{width: '100px', fontSize: '15px', position: 'absolute', bottom: '13px', right: '140px'}} className='form-button normal-font delete-friend-cancel-button'>Cancel</button>
            <button onClick={handleClick}  style={{width: '100px', fontSize: '15px', position: 'absolute', bottom: '13px', right: '13px'}} className='form-button normal-font delete-friend-full-button'>Remove Friend</button>
        </section>
    </div>
    )
}

export default DeleteFriendModal

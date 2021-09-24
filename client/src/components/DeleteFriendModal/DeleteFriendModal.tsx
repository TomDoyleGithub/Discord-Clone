import React from 'react'

function DeleteFriendModal() {
    return (
        <div className='modal-container '>
        <section className='password-send'>
            <p className='header-font f600' style={{fontSize: "22px", color: 'white'}}>Remove 'Punkinut'</p>
            <p className='normal-font f300' style={{paddingTop: '20px', color: '#dcddde'}}>Are you sure you want to permanently remove  <strong>Punkinut</strong> from your friends?</p>
            <section className='button-container delete-friend-button-container'></section>
            <button style={{width: '100px', fontSize: '15px', position: 'absolute', bottom: '13px', right: '140px'}} className='form-button normal-font delete-friend-cancel-button'>Cancel</button>
            <button style={{width: '100px', fontSize: '15px', position: 'absolute', bottom: '13px', right: '13px'}} className='form-button normal-font delete-friend-full-button'>Remove Friend</button>
        </section>
    </div>
    )
}

export default DeleteFriendModal

import React from 'react'

function CardModal({id, username, state}) {
    const handleClick = () => {
        console.log(`ID: ${id}`);
        console.log(`USERNAME: ${username}`);
        // Create A Delete Modal file in then root component directory
        // Activate Modal State Here So That It Displays
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

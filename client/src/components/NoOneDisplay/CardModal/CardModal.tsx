import React from 'react'

function CardModal({id, state}) {
    return (
        <section  className={'card-settings normal-font ' + (id === state ? 'card-settings-show' : 'hidey-time')}>
            <p className='mini-sub-card-modal greyby-card'>Start Video Call</p>
            <p className='mini-sub-card-modal greyby-card'>Start Voice Call</p>
            <p className='mini-sub-card-modal reddy-card'>Remove Friend</p>
        </section>
    )
}

export default CardModal

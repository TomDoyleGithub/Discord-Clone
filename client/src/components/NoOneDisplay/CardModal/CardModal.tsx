import React from 'react'

function CardModal({state}) {
    return (
        <section  className={'card-settings normal-font ' + (state === '' ? 'hidey-time' : 'card-settings-show')}>
            <p className='mini-sub-card-modal greyby-card'>Start Video Call</p>
            <p className='mini-sub-card-modal greyby-card'>Start Voice Call</p>
            <p className='mini-sub-card-modal reddy-card'>Remove Friend</p>
        </section>
    )
}

export default CardModal

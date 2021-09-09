import React from 'react'

function PasswordModal({modal, setModal, email}) {
    const handleClick = () => {
        setModal(false)
    };
    return (
        <div className={'modal-container ' + (modal ? 'show' : 'hide')}>
            <section className='password-send'>
                <p className='header-font f600' style={{fontSize: "22px"}}>Instructions Sent</p>
                <p className='normal-font f300' style={{paddingTop: '20px', color: '#dcddde'}}>We sent instructions to change your password to <strong>{email}</strong>, please check both your inbox and spam folder.</p>
                <section className='button-container'></section>
                <button onClick={handleClick} style={{width: '100px', fontSize: '15px', position: 'absolute', bottom: '13px', right: '13px'}} className='form-button normal-font'>Okay</button>
            </section>
        </div>
    )
}

export default PasswordModal

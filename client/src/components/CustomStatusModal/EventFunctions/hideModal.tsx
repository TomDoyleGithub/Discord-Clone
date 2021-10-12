export const hideModal = (e, dispatch, setExpireDrop, setStatusDrop, setInput, TOGGLE_CUSTOM_STATUS, SET_EMOJI_MODAL, CUSTOM_EMOJI_CHOICE, SET_STATUS_DROOPDOWN, SET_EXPIRE_DROPDOWN) => {
    if(e.target === e.currentTarget) {
        dispatch({ type: TOGGLE_CUSTOM_STATUS, showModal: false});
        dispatch({ type: SET_EMOJI_MODAL, emojiModal: false});
        dispatch({ type: CUSTOM_EMOJI_CHOICE, emoji: ''});
        setTimeout(function () {
            dispatch({ type: SET_STATUS_DROOPDOWN, status: '' });
            dispatch({ type: SET_EXPIRE_DROPDOWN, expire: 'Today' });
        }, 1000); 
        setExpireDrop(false);
        setStatusDrop(false);
        setInput('');
     }
};
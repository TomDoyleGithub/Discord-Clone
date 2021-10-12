export const openEmoji = (e, setStatusDrop, setExpireDrop, dispatch, emojiModal, SET_EMOJI_MODAL, UPDATE_EMOJI_POSITION) => {
    setStatusDrop(false);
    setExpireDrop(false);
    if (emojiModal === true) {
        dispatch({ type: SET_EMOJI_MODAL, emojiModal: false});
    } else {
        dispatch({ type: SET_EMOJI_MODAL, emojiModal: true});
        dispatch({ type: UPDATE_EMOJI_POSITION, left: e.pageX, top: e.pageY});
    }
    
};
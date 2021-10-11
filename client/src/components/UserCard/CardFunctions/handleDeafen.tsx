export const handleDeafen = (dispatch, deafen, playHead, playUnhead, UPDATE_DEAFEN) => {
    dispatch({ type: UPDATE_DEAFEN});
    if (deafen) {
        playHead();
    } else {
        playUnhead();
    };
};
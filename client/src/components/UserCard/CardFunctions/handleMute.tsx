export const handleMute = (dispatch, mute, playMute, playUnmute, UPDATE_MUTE) => {
    dispatch({ type: UPDATE_MUTE});
    if (mute) {
        playMute();
    } else {
        playUnmute();
    };
};
export const clearInput = (setInput, dispatch, CUSTOM_EMOJI_CHOICE) => {
    setInput('');
    dispatch({ type: CUSTOM_EMOJI_CHOICE, emoji: ''});
};
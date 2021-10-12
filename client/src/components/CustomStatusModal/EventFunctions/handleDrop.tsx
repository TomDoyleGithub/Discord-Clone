export const handleDrop = (e, dispatch, UPDATE_EMOJI_POSITION, setStatusDrop, setExpireDrop, expireDropdown, statusDropdown) => {
    const type = e.currentTarget.getAttribute('data-value');
    const leftPosition = e.currentTarget.getBoundingClientRect().left;
    const topPosition = e.currentTarget.getBoundingClientRect().bottom;
    dispatch({ type: UPDATE_EMOJI_POSITION, left: leftPosition, top: topPosition});
    if (type === 'date') {
        setStatusDrop(false);
        setExpireDrop(!expireDropdown)
    } else {
        setExpireDrop(false);
        setStatusDrop(!statusDropdown)
    }
};
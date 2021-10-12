export const submitModal = async (e, hideModal, dispatch, setExpireDrop, setStatusDrop, setInput, TOGGLE_CUSTOM_STATUS, SET_EMOJI_MODAL, CUSTOM_EMOJI_CHOICE, SET_STATUS_DROOPDOWN, SET_EXPIRE_DROPDOWN, emojiChoice, input, expireFunction, dropdownExpire, customStatusMut, realStatus, data, CHANGE_STATUS, updateStatus) => {
    hideModal(e, dispatch, setExpireDrop, setStatusDrop, setInput, TOGGLE_CUSTOM_STATUS, SET_EMOJI_MODAL, CUSTOM_EMOJI_CHOICE, SET_STATUS_DROOPDOWN, SET_EXPIRE_DROPDOWN);
    const customStatus = `${emojiChoice}~${input}`;
    if (customStatus !== ' ') {
        const expireDate = expireFunction(dropdownExpire).toString();
        customStatusMut({ variables: {customStatus, expireDate}});
    }

    if (realStatus !== data?.me?.status) {
        dispatch({ type: CHANGE_STATUS, status: realStatus });
        updateStatus({ variables: {status: realStatus}});
    }
};
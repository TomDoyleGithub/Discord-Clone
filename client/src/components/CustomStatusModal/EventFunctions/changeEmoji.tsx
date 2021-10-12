export const changeEmoji = (emojiModal, emojiArr, setEmoji) => {
    if (emojiModal === false) {
        const random = Math.floor(Math.random() * emojiArr.length);
        setEmoji(emojiArr[random])
    }
};
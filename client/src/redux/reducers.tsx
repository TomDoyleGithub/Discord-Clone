import { 
    TOGGLE_DISABLE, 
    TOGGLE_ERROR, 
    TOGGLE_LOAD, 
    UPDATE_FORM, 
    CHANGE_HOME_ROUTE,
    UPDATE_MUTE,
    UPDATE_DEAFEN, 
    CHANGE_LOADER,
    CHANGE_STATUS,
    TOGGLE_STATUS_MODAL,
    CHANGE_FRIEND_NAV,
    CHANGE_GUILD_NAV,
    TOGGLE_FULL_MODAL,
    MODAL_USER,
    TOGGLE_CUSTOM_STATUS,
    SET_EMOJI_MODAL,
    SET_EMOJI_PLACEHOLDER,
    UPDATE_EMOJI_POSITION,
    CUSTOM_EMOJI_CHOICE,
    SET_STATUS_DROOPDOWN,
    SET_EXPIRE_DROPDOWN,
    SET_USERDATA
} from './actions';

import { io } from "socket.io-client";

const initalState = {
    loading: false,
    error: false,
    disable: true,
    email: '',
    username: '',
    password: '',
    realMonth: '',
    realDay: '',
    realYear: '',
    mute: false,
    deafen: false,
    homeRoute: '/channels/@me',
    largerLoader: true,
    status: '',
    statusModal: false,
    socket: io(),
    friendsNav: 'online',
    guildNav: 'Home',
    showScreenModal: false,
    modalUsername: '',
    modalId: '',
    customStatusModal: false,
    emojiModal: false,
    emojiPlaceholder: 'Find the perfect emoji',
    emojiLeft: 20,
    emojiTop: 0,
    emojiChoice: '',
    dropdownStatus: '',
    dropdownExpire: 'Today',
    userData: {},
    dataLoading: true
};

export default function reducer (state = initalState, action) {
    switch (action.type) {
        case SET_USERDATA:
            return { 
                ...state, 
                userData: action.data,
                dataLoading: action.loading
            };
        case TOGGLE_LOAD:
            return { 
                ...state, 
                loading: !state.loading
            };
        case TOGGLE_ERROR:
            return { 
                ...state,
                error: action.value
            };
        case TOGGLE_DISABLE:
            return {
                ...state,
                disable: action.value
            }
        case UPDATE_FORM:
            let name = action.name;
            return {
                ...state,
                [name]: action.value
            };
        case CHANGE_HOME_ROUTE:
            return {
                ...state,
                homeRoute: action.route
            };
        case UPDATE_MUTE:
            return {
                ...state,
                mute: !state.mute,
                deafen: false
            };
        case UPDATE_DEAFEN:
            return {
                ...state,
                deafen: !state.deafen,
                mute: true
            };
        case CHANGE_LOADER:
            if (action.userLoad) {
                return {
                    ...state,
                    largerLoader: true
                };
            };
            return {
                ...state,
                largerLoader: false
            };
        case CHANGE_STATUS:
            return {
                ...state,
                status: action.status
            };
        case TOGGLE_STATUS_MODAL:
            return {
                ...state,
                statusModal: !state.statusModal
            };
        case TOGGLE_FULL_MODAL:
            return {
                ...state,
                showScreenModal: action.showModal
            };
        case TOGGLE_CUSTOM_STATUS:
            return {
                ...state,
                customStatusModal: action.customStatusModal
            };
        case CHANGE_FRIEND_NAV:
            return {
                ...state,
                friendsNav: action.friendsNav
            };
        case CHANGE_GUILD_NAV:
            return {
                ...state,
                guildNav: action.guildNav
            };
        case MODAL_USER:
            return {
                ...state,
                modalUsername: action.modalUsername,
                modalId: action.modalId
            };
        case SET_EMOJI_MODAL:
            return {
                ...state,
                emojiModal: action.emojiModal
            };
        case SET_EMOJI_PLACEHOLDER:
            return {
                ...state,
                emojiPlaceholder: action.emojiPlaceholder
            };
        case UPDATE_EMOJI_POSITION:
            return {
                ...state,
                emojiLeft: action.left,
                emojiTop: action.top
            };
        case CUSTOM_EMOJI_CHOICE:
            return {
                ...state,
                emojiChoice: action.emoji
            }
        case SET_STATUS_DROOPDOWN:
            return {
                ...state,
                dropdownStatus: action.status
            }
        case SET_EXPIRE_DROPDOWN:
            return {
                ...state,
                dropdownExpire: action.expire
            }
        default: 
            return state;
    };
};
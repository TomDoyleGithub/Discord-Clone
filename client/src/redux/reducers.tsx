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
    MODAL_USER
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
    modalId: ''
};

export default function reducer (state = initalState, action) {
    switch (action.type) {
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
        default: 
            return state;
    };
};
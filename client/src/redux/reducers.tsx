import { 
    TOGGLE_DISABLE, 
    TOGGLE_ERROR, 
    TOGGLE_LOAD, 
    UPDATE_FORM, 
    CHANGE_HOME_ROUTE,
    UPDATE_MUTE,
    UPDATE_DEAFEN 
} from './actions';

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
    homeRoute: '/channels/@me'
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
                mute: action.mute
            };
        case UPDATE_DEAFEN:
            return {
                ...state,
                deafen: action.deafen
            };
        default: 
            return state;
    };
};
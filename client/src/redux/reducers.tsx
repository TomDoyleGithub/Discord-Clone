import { TOGGLE_DISABLE, TOGGLE_ERROR, TOGGLE_LOAD, UPDATE_FORM } from './actions';

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
        default: 
            return state;
    };
};
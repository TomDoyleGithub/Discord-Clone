import { TOGGLE_LOAD, UPDATE_FORM } from './actions';

const initalState = {
    loading: false,
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
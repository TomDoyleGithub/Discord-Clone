import { TOGGLE_LOAD } from './actions';

const initalState = {
    loading: false,
};

export default function reducer (state = initalState, action) {
    switch (action.type) {
        case TOGGLE_LOAD:
            return { 
                ...state, 
                loading: !state.loading
            };
        default: 
            return state;
    };
};
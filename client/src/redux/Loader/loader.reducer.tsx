import { TOGGLE_LOAD } from './loader.types';


const INITIAL_STATE = {

    loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case TOGGLE_LOAD:

           return {

             ...state, count: state.loading = !state,

           };

         default: return state;

    }

};

export default reducer;